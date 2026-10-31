import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import * as questionFile from './questions';
import './styles.css';

type Question = { id: string; text: string; options: string[]; correct: number; topic: string; hint: string; explanation: string };
type Attempt = { id: string; topic: string; correct: boolean };
const STORAGE = 'ds-study-history-v2';
function readHistory(): Attempt[] { try { const value = JSON.parse(localStorage.getItem(STORAGE) || '[]'); return Array.isArray(value) ? value.filter(x => typeof x?.id === 'string' && typeof x?.correct === 'boolean') : []; } catch { return []; } }
function normalise(): { questions: Question[]; rejected: number } {
  const exports = questionFile as unknown as Record<string, unknown>;
  const raw = exports.questions ?? exports.questionBank ?? exports.QUESTIONS ?? exports.default ?? Object.values(exports).find(Array.isArray);
  if (!Array.isArray(raw)) return { questions: [], rejected: 0 };
  const questions: Question[] = [];
  raw.forEach((item, index) => {
    if (!item || typeof item !== 'object') return;
    const q = item as Record<string, any>;
    const source = q.options ?? q.choices ?? q.answers;
    if (!Array.isArray(source)) return;
    const options = source.map((o: any) => typeof o === 'string' ? o : String(o?.text ?? o?.label ?? ''));
    let correct: number = -1;
    const answer = q.correctIndex ?? q.correctAnswerIndex ?? q.answerIndex ?? q.correctAnswer ?? q.answer ?? q.correct;
    if (typeof answer === 'number') correct = answer;
    else if (typeof answer === 'string') {
      correct = options.findIndex(o => o.trim().toLowerCase() === answer.trim().toLowerCase());
      if (correct < 0 && /^[a-z]$/i.test(answer.trim())) correct = answer.trim().toLowerCase().charCodeAt(0) - 97;
    }
    if (correct < 0) correct = source.findIndex((o: any) => typeof o === 'object' && (o?.correct === true || o?.isCorrect === true));
    const text = q.question ?? q.text ?? q.prompt;
    if (typeof text !== 'string' || options.length < 2 || options.some(o => !o) || correct < 0 || correct >= options.length) return;
    questions.push({ id: String(q.id ?? index), text, options, correct, topic: String(q.topic ?? q.category ?? 'General'), hint: String(q.hint ?? ''), explanation: String(q.explanation ?? q.rationale ?? '') });
  });
  return { questions, rejected: raw.length - questions.length };
}
const bank = normalise();
function shuffle<T>(items: T[]): T[] { const copy = [...items]; for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; } return copy; }
function App() {
  const [history, setHistory] = useState<Attempt[]>(readHistory);
  const [topic, setTopic] = useState('All topics');
  const [mode, setMode] = useState<'learn' | 'test'>('learn');
  const [size, setSize] = useState(10);
  const [queue, setQueue] = useState<Question[]>([]);
  const [position, setPosition] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [answers, setAnswers] = useState<{ question: Question; choice: number }[]>([]);
  const [screen, setScreen] = useState<'home' | 'quiz' | 'results'>('home');
  const [storageError, setStorageError] = useState(false);
  useEffect(() => { try { localStorage.setItem(STORAGE, JSON.stringify(history)); } catch { setStorageError(true); } }, [history]);
  const topics = ['All topics', ...Array.from(new Set(bank.questions.map(q => q.topic)))];
  const pool = bank.questions.filter(q => topic === 'All topics' || q.topic === topic);
  const latest = useMemo(() => { const map = new Map<string, boolean>(); history.forEach(a => map.set(a.id, a.correct)); return map; }, [history]);
  const missed = bank.questions.filter(q => latest.get(q.id) === false);
  const accuracy = history.length ? Math.round(history.filter(a => a.correct).length / history.length * 100) : 0;
  const current = queue[position];
  function start(items: Question[]) { if (!items.length) return; setQueue(shuffle(items).slice(0, size)); setPosition(0); setSelected(null); setChecked(false); setShowHint(false); setAnswers([]); setScreen('quiz'); }
  function submit() {
    if (selected === null || checked || !current) return;
    setAnswers(old => [...old, { question: current, choice: selected }]);
    setHistory(old => [...old, { id: current.id, topic: current.topic, correct: selected === current.correct }]);
    setChecked(true);
  }
  function next() { if (position + 1 === queue.length) setScreen('results'); else { setPosition(p => p + 1); setSelected(null); setChecked(false); setShowHint(false); } }
  const score = answers.filter(a => a.choice === a.question.correct).length;
  return <div className="app-shell">
    <header className="topbar"><button className="brand" onClick={() => { if (screen !== 'quiz' || window.confirm('Leave this session? Submitted answers will stay in your history.')) setScreen('home'); }}><span className="brand-mark">DS</span><span>Study Studio<small>DATA SCIENCE PRACTICE</small></span></button><span className="header-pill">Your learning space</span></header>
    <main>
    {screen === 'home' && <>
      <section className="hero"><div className="eyebrow">SMALL SESSIONS. STRONGER UNDERSTANDING.</div><h1>Build confidence.<br/><span>One question at a time.</span></h1><p>Practise your question bank, learn from mistakes and revisit the topics that need a little more attention.</p><div className="hero-tags"><span>Hints when you need them</span><span>Feedback that makes sense</span><span>Progress saved locally</span></div></section>
      <section className="stats" aria-label="Study statistics"><div><small>QUESTION BANK</small><strong>{bank.questions.length}</strong><span>ready to practise</span></div><div><small>ANSWERS SUBMITTED</small><strong>{history.length}</strong><span>across your sessions</span></div><div><small>ALL-TIME ACCURACY</small><strong>{history.length ? `${accuracy}%` : '—'}</strong><span>based on submitted answers</span></div></section>
      {bank.rejected > 0 && <div className="notice">{bank.rejected} question(s) could not be read. Check the question format in the included instructions before relying on the full bank.</div>}
      {storageError && <div className="notice">Your browser could not save progress. This session still works, but history may not persist.</div>}
      <div className="dashboard"><section className="panel setup"><div className="section-label">YOUR NEXT SESSION</div><h2>Make it work for you.</h2><p className="muted">Choose a topic and how you want to practise.</p>
        <label htmlFor="topic">Topic</label><select id="topic" value={topic} onChange={e => setTopic(e.target.value)}>{topics.map(t => <option key={t}>{t}</option>)}</select>
        <label>Practice style</label><div className="mode-grid"><button className={mode === 'learn' ? 'mode active' : 'mode'} aria-pressed={mode === 'learn'} onClick={() => setMode('learn')}><strong>Learn</strong><span>Hints and immediate feedback</span></button><button className={mode === 'test' ? 'mode active' : 'mode'} aria-pressed={mode === 'test'} onClick={() => setMode('test')}><strong>Test yourself</strong><span>Review answers at the end</span></button></div>
        <label htmlFor="size">Session length</label><select id="size" value={size} onChange={e => setSize(Number(e.target.value))}>{[5, 10, 20, 50].map(n => <option value={n} key={n}>{n} questions</option>)}</select>
        <button className="primary wide" disabled={!pool.length} onClick={() => start(pool)}>Start practising <span>→</span></button><small className="helper">{Math.min(size, pool.length)} questions available for this session. No timer, no pressure.</small>
      </section><aside className="panel revision"><div className="section-label">TURN MISTAKES INTO PROGRESS</div><h2>A second look<br/>makes it stick.</h2><p>Revisit questions you most recently answered incorrectly. A correct retry removes them from this list.</p><div className="revision-count">{missed.length}<span>questions to revisit</span></div><button className="secondary wide" disabled={!missed.length} onClick={() => start(missed)}>Practise missed questions</button><div className="privacy-note">Your history stays in this browser. It is not synced across devices.</div><button className="text-button" onClick={() => { if (window.confirm('Clear all saved study history?')) setHistory([]); }}>Reset saved progress</button></aside></div>
      {!bank.questions.length && <div className="notice">No compatible questions found in questions.ts. See README-UPGRADE.md for supported fields. Your existing question file has not been replaced.</div>}
    </>}
    {screen === 'quiz' && current && <section className="quiz-layout"><div className="quiz-meta"><span>{mode === 'learn' ? 'Learning session' : 'Self-test'} · {current.topic}</span><span>Question {position + 1} of {queue.length}</span></div><progress value={position} max={queue.length} aria-label="Completed questions"/><div className="panel question-panel"><div className="section-label">TAKE A MOMENT. THINK IT THROUGH.</div><h1 className="question-title">{current.text}</h1><div className="options">{current.options.map((option, i) => { const reveal = checked && mode === 'learn'; const status = reveal && i === current.correct ? ' correct' : reveal && i === selected ? ' incorrect' : ''; return <button key={i} disabled={checked} aria-pressed={selected === i} className={`option${selected === i ? ' selected' : ''}${status}`} onClick={() => setSelected(i)}><span className="option-letter">{String.fromCharCode(65 + i)}</span><span>{option}</span>{reveal && i === current.correct && <strong className="answer-status">Correct</strong>}{reveal && i === selected && i !== current.correct && <strong className="answer-status">Your answer</strong>}</button>; })}</div>
      {mode === 'learn' && !checked && <><button className="text-button" onClick={() => setShowHint(v => !v)}>{showHint ? 'Hide hint' : 'Need a hint?'}</button>{showHint && <div className="hint">{current.hint || 'No hint is supplied for this question. Try eliminating the options you know are incorrect.'}</div>}</>}
      <div aria-live="polite">{checked && mode === 'learn' && <div className={`feedback ${selected === current.correct ? 'success' : 'retry'}`}><strong>{selected === current.correct ? 'You’ve got it.' : 'A useful learning moment.'}</strong><p>{current.explanation || `The correct answer is ${current.options[current.correct]}. No further explanation is supplied in your question bank.`}</p></div>}{checked && mode === 'test' && <div className="hint">Answer saved. You can review the result at the end.</div>}</div>
      <div className="question-footer"><span className="muted">{checked ? 'Ready for the next one?' : 'Choose one answer above.'}</span>{checked ? <button className="primary" onClick={next}>{position + 1 === queue.length ? 'See results' : 'Next question'} →</button> : <button className="primary" disabled={selected === null} onClick={submit}>{mode === 'learn' ? 'Check answer' : 'Submit answer'}</button>}</div></div></section>}
    {screen === 'results' && <section className="results"><div className="section-label">SESSION COMPLETE</div><h1>Every session is a step forward.</h1><p className="muted">Review what clicked and what deserves another look.</p><div className="panel result-summary"><strong>{score}<span> / {answers.length}</span></strong><div><h2>{answers.length ? Math.round(score / answers.length * 100) : 0}% correct</h2><p>{answers.length - score} questions to revisit from this session.</p></div></div><div className="result-actions"><button className="primary" onClick={() => setScreen('home')}>Back to dashboard</button><button className="secondary" disabled={score === answers.length} onClick={() => start(answers.filter(a => a.choice !== a.question.correct).map(a => a.question))}>Retry missed questions</button></div><h2>Your answer review</h2>{answers.map((a, i) => <details className="panel review" key={i}><summary><span className={a.choice === a.question.correct ? 'badge good' : 'badge bad'}>{a.choice === a.question.correct ? 'Correct' : 'Revisit'}</span><span>{a.question.text}</span></summary><p><strong>Your answer:</strong> {a.question.options[a.choice]}</p><p><strong>Correct answer:</strong> {a.question.options[a.question.correct]}</p><p>{a.question.explanation || 'No explanation is supplied in the question bank.'}</p></details>)}</section>}
    </main><footer>Study Studio · Independent practice tool, not an official assessment or predicted exam score.</footer>
  </div>;
}
const root = document.getElementById('root');
if (root) createRoot(root).render(<React.StrictMode><App/></React.StrictMode>);
