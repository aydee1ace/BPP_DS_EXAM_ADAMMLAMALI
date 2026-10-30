export const questions = [
  {
    "id": 1,
    "topic": "Cloud & Storage",
    "subtopic": "Cloud deployment",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "Which deployment model gives one organisation the highest control over its cloud environment?",
    "options": [
      {
        "text": "Public cloud",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Private cloud",
        "feedback": "Correct."
      },
      {
        "text": "Community cloud",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Multitenant SaaS",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 1,
    "explanation": "A private cloud is dedicated to one organisation, providing greater control over configuration, access and data location.",
    "hint": "Think: dedicated to one organisation.",
    "memoryTip": "Private cloud = dedicated environment; public cloud = shared provider infrastructure."
  },
  {
    "id": 2,
    "topic": "Cloud & Storage",
    "subtopic": "Storage types",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "Which storage option is best suited to low-cost, long-term archives?",
    "options": [
      {
        "text": "Block storage",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Relational database",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "In-memory cache",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Object storage",
        "feedback": "Correct."
      }
    ],
    "correctAnswer": 3,
    "explanation": "Object storage scales economically for large volumes of files and can use archival access tiers.",
    "hint": "Which option commonly stores files as objects?",
    "memoryTip": "Object storage suits documents, media, backups and archives."
  },
  {
    "id": 3,
    "topic": "Databases",
    "subtopic": "OLAP",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "OLAP systems are commonly used for:",
    "options": [
      {
        "text": "Key-value lookups",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Multidimensional analytical queries",
        "feedback": "Correct."
      },
      {
        "text": "Transactional inserts",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Storing documents",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 1,
    "explanation": "OLAP is designed for analysis across dimensions such as time, region and product.",
    "hint": "The A in OLAP is analytical.",
    "memoryTip": "OLAP = analysis; OLTP = day-to-day transactions."
  },
  {
    "id": 4,
    "topic": "Databases",
    "subtopic": "NoSQL",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "Which NoSQL model fits flexible, semi-structured product catalogues?",
    "options": [
      {
        "text": "Graph store",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Columnar warehouse",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Document store",
        "feedback": "Correct."
      },
      {
        "text": "Relational table",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 2,
    "explanation": "Document stores hold JSON-like records whose fields may vary between products.",
    "hint": "Think JSON-like records.",
    "memoryTip": "Document databases are useful when entities have varying attributes."
  },
  {
    "id": 5,
    "topic": "Statistics",
    "subtopic": "Regression",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "Linear regression is most appropriate for:",
    "options": [
      {
        "text": "Predicting categories",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Reducing dimensions",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Clustering observations",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Predicting continuous values",
        "feedback": "Correct."
      }
    ],
    "correctAnswer": 3,
    "explanation": "Linear regression predicts numerical outcomes such as cost, temperature or revenue.",
    "hint": "Is the target a category or a number?",
    "memoryTip": "Regression predicts numbers; classification predicts categories."
  },
  {
    "id": 6,
    "topic": "Statistics",
    "subtopic": "Regression assumptions",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "A core assumption of linear regression is:",
    "options": [
      {
        "text": "No multicollinearity is allowed",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "All predictors are binary",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "The target is categorical",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "The predictors have a linear relationship with the target",
        "feedback": "Correct."
      }
    ],
    "correctAnswer": 3,
    "explanation": "Linear regression assumes the expected target is a linear combination of the predictors.",
    "hint": "Look at the model name.",
    "memoryTip": "Linearity concerns the expected relationship, while residual assumptions affect inference."
  },
  {
    "id": 7,
    "topic": "Machine Learning",
    "subtopic": "Clustering",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "Which method identifies groups of customers with similar behaviour?",
    "options": [
      {
        "text": "Linear discriminant analysis",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "ARIMA",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Logistic regression",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "K-means clustering",
        "feedback": "Correct."
      }
    ],
    "correctAnswer": 3,
    "explanation": "K-means is an unsupervised method that groups observations into clusters based on similarity.",
    "hint": "No labelled outcome is provided.",
    "memoryTip": "Clustering discovers groups; classification predicts known labels."
  },
  {
    "id": 8,
    "topic": "Machine Learning",
    "subtopic": "SVM",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "A support vector machine with a nonlinear kernel is useful for:",
    "options": [
      {
        "text": "Nonlinear classification boundaries",
        "feedback": "Correct."
      },
      {
        "text": "Perfectly linear problems only",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Simple counting tasks",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Dimension reduction only",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "A nonlinear kernel lets an SVM represent curved or complex decision boundaries.",
    "hint": "What does the kernel change about the boundary?",
    "memoryTip": "The kernel trick represents data in a space where separation can be easier."
  },
  {
    "id": 9,
    "topic": "AI & NLP",
    "subtopic": "NLP foundations",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "Which step is essential in most machine-learning NLP pipelines?",
    "options": [
      {
        "text": "Converting text into numerical representations",
        "feedback": "Correct."
      },
      {
        "text": "Avoiding tokenisation",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Ignoring all structure",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Operating only on raw HTML",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Models require numerical inputs, such as TF-IDF features or embeddings.",
    "hint": "Models calculate with numbers.",
    "memoryTip": "Typical flow: clean/tokenise text, represent numerically, then model."
  },
  {
    "id": 10,
    "topic": "Machine Learning",
    "subtopic": "Supervised learning",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "Predicting customer churn from historical labelled behaviour is:",
    "options": [
      {
        "text": "Reinforcement learning",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Supervised predictive modelling",
        "feedback": "Correct."
      },
      {
        "text": "Unsupervised learning",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Semantic clustering",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 1,
    "explanation": "Historical records contain known outcomes, allowing the model to learn a mapping to churn labels.",
    "hint": "Are known outcomes available?",
    "memoryTip": "Supervised learning uses labelled examples."
  },
  {
    "id": 11,
    "topic": "Production ML",
    "subtopic": "Constraints",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "When deploying a model at scale, a key operational concern is:",
    "options": [
      {
        "text": "Balancing accuracy with computational cost",
        "feedback": "Correct."
      },
      {
        "text": "Choosing maximum complexity",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Using maximum memory",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Prioritising novelty",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Production systems must balance predictive quality against latency, throughput, memory and cost.",
    "hint": "A production model must be useful and affordable.",
    "memoryTip": "The best production model is not always the most accurate offline model."
  },
  {
    "id": 12,
    "topic": "Production ML",
    "subtopic": "Edge computing",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "A team chooses a simpler model for low-power devices. This demonstrates:",
    "options": [
      {
        "text": "Respecting hardware constraints",
        "feedback": "Correct."
      },
      {
        "text": "Simplifying ETL",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Favouring interpretability only",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Reducing training data",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Low-power devices impose limits on CPU, memory, energy and latency.",
    "hint": "Focus on the device limitation.",
    "memoryTip": "Deployment constraints can justify model compression or simpler algorithms."
  },
  {
    "id": 13,
    "topic": "Development Standards",
    "subtopic": "Version control",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "Git is critical because it can:",
    "options": [
      {
        "text": "Automatically test every algorithm",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Compile scripts",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Execute ML models",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Track, manage and merge code changes",
        "feedback": "Correct."
      }
    ],
    "correctAnswer": 3,
    "explanation": "Git records code history and supports branches, collaboration and merging.",
    "hint": "Think change history and collaboration.",
    "memoryTip": "Git provides version control; CI tools can run automated tests."
  },
  {
    "id": 14,
    "topic": "Development Standards",
    "subtopic": "Testing",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "Unit tests in data pipelines help ensure:",
    "options": [
      {
        "text": "The final model is always best",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Components behave correctly in isolation",
        "feedback": "Correct."
      },
      {
        "text": "All data is automatically cleaned",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Code is always documented",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 1,
    "explanation": "Unit tests verify small components, such as a date parser or validation function, independently.",
    "hint": "What does unit mean?",
    "memoryTip": "Unit tests check small units; integration tests check components working together."
  },
  {
    "id": 15,
    "topic": "Data Landscape",
    "subtopic": "Open data",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "Which is an example of open data?",
    "options": [
      {
        "text": "Private ledgers",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Proprietary APIs",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Encrypted customer transactions",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Government-released public datasets",
        "feedback": "Correct."
      }
    ],
    "correctAnswer": 3,
    "explanation": "Open data is made available for public access and reuse under stated terms.",
    "hint": "Which option is deliberately public?",
    "memoryTip": "Open does not mean ungoverned; licences and usage terms can still apply."
  },
  {
    "id": 16,
    "topic": "Data Formats",
    "subtopic": "Unstructured data",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "Which is unstructured data?",
    "options": [
      {
        "text": "JSON with a consistent schema",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "SQL tables",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "CSV files",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Free-text documents",
        "feedback": "Correct."
      }
    ],
    "correctAnswer": 3,
    "explanation": "Free text does not naturally conform to fixed rows, columns and field types.",
    "hint": "Which option lacks fixed fields?",
    "memoryTip": "SQL/CSV are structured, JSON is often semi-structured, free text is unstructured."
  },
  {
    "id": 17,
    "topic": "Data Quality",
    "subtopic": "Missing data",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "Missing data often arises from:",
    "options": [
      {
        "text": "Underuse of automation only",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Intentional schema design",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Excessive validation",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Sensor failures, omissions or integration issues",
        "feedback": "Correct."
      }
    ],
    "correctAnswer": 3,
    "explanation": "Collection failures, blank user inputs and failed transfers are common causes of missingness.",
    "hint": "Think about ways a value fails to arrive.",
    "memoryTip": "The mechanism of missingness matters because it affects treatment and bias."
  },
  {
    "id": 18,
    "topic": "Time Series",
    "subtopic": "Seasonality",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "Seasonality refers to:",
    "options": [
      {
        "text": "Long-term trend only",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Random variation",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Measurement errors",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Regular repeating patterns",
        "feedback": "Correct."
      }
    ],
    "correctAnswer": 3,
    "explanation": "Seasonality is a recurring pattern at a known frequency, such as daily, weekly or yearly.",
    "hint": "What repeats on a schedule?",
    "memoryTip": "Trend is long-term direction; seasonality repeats."
  },
  {
    "id": 19,
    "topic": "Model Evaluation",
    "subtopic": "Imbalanced data",
    "difficulty": "Hard",
    "questionType": "Scenario",
    "question": "A model has 1% positives, high ROC-AUC and poor deployed results. What is the most likely issue?",
    "options": [
      {
        "text": "Tree depth creates excessive bias",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "ROC-AUC can appear strong while minority-class precision is poor",
        "feedback": "Correct."
      },
      {
        "text": "Class weights always corrupt importance",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Boosting cannot handle imbalance",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 1,
    "explanation": "With rare positives, ROC-AUC may not reflect the operational cost of false positives. Precision, recall and PR-AUC provide more relevant evidence.",
    "hint": "Ask what high AUC may hide for rare positives.",
    "memoryTip": "For imbalanced outcomes, inspect PR-AUC, threshold metrics and the confusion matrix."
  },
  {
    "id": 20,
    "topic": "Production ML",
    "subtopic": "Online learning",
    "difficulty": "Hard",
    "questionType": "Scenario",
    "question": "Which approach best balances latency, adaptability and concept-drift management in real-time fraud detection?",
    "options": [
      {
        "text": "Large forest refreshed annually",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Static logistic regression",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Monthly batch neural network",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Online model with incremental updates",
        "feedback": "Correct."
      }
    ],
    "correctAnswer": 3,
    "explanation": "Incremental updates allow the model to adapt as new labelled evidence arrives without waiting for infrequent batch retraining.",
    "hint": "Which choice learns between batch cycles?",
    "memoryTip": "Online learning can adapt quickly but needs safeguards against noisy or adversarial feedback."
  },
  {
    "id": 21,
    "topic": "MLOps",
    "subtopic": "Drift",
    "difficulty": "Hard",
    "questionType": "Scenario",
    "question": "A pipeline retrains whenever input distributions change, yet production performance degrades. What is most plausible?",
    "options": [
      {
        "text": "Retraining is always too frequent",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Feature engineering cannot be automated",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Input drift does not necessarily capture changes in the target relationship",
        "feedback": "Correct."
      },
      {
        "text": "The model necessarily overfits production",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 2,
    "explanation": "Monitoring input drift alone can miss concept drift: the mapping between features and outcomes may change.",
    "hint": "Inputs changing is not the same as the prediction relationship changing.",
    "memoryTip": "Data drift describes inputs; concept drift describes the feature-to-target relationship."
  },
  {
    "id": 22,
    "topic": "Statistics",
    "subtopic": "Large-scale distributions",
    "difficulty": "Expert",
    "questionType": "Scenario",
    "question": "How should two numerical distributions containing 500M+ rows be compared efficiently?",
    "options": [
      {
        "text": "Mann-Whitney U on every row",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Exact KS on all raw values",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Approximate quantile sketches",
        "feedback": "Correct."
      },
      {
        "text": "One fixed-bin histogram only",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 2,
    "explanation": "Quantile sketches summarise very large distributions with bounded memory and support scalable approximate comparison.",
    "hint": "Look for a streaming summary rather than a raw-data test.",
    "memoryTip": "At huge scale, practical significance and scalable summaries matter alongside statistical significance."
  },
  {
    "id": 23,
    "topic": "Decision Making",
    "subtopic": "Evidence",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "Which action most supports data-driven decisions?",
    "options": [
      {
        "text": "Use intuition alone",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Use evidence from multiple reliable sources",
        "feedback": "Correct."
      },
      {
        "text": "Choose metrics after deciding",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Avoid experiments",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 1,
    "explanation": "Reliable evidence from multiple sources reduces dependence on one potentially biased signal.",
    "hint": "Evidence should come before the decision.",
    "memoryTip": "Define decision criteria and metrics before examining outcomes."
  },
  {
    "id": 24,
    "topic": "Decision Making",
    "subtopic": "Experimentation",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "A/B testing supports decision making by:",
    "options": [
      {
        "text": "Removing analysis",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Eliminating uncertainty",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Guaranteeing the best choice",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Comparing control and treatment groups",
        "feedback": "Correct."
      }
    ],
    "correctAnswer": 3,
    "explanation": "A/B tests compare outcomes under controlled alternatives to estimate an intervention effect.",
    "hint": "A is usually the existing experience and B the change.",
    "memoryTip": "Random assignment helps reduce confounding, but does not eliminate all uncertainty."
  },
  {
    "id": 25,
    "topic": "Data Processing",
    "subtopic": "Streaming",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "Social media streaming data is typically:",
    "options": [
      {
        "text": "Low volume",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Highly structured only",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Unstructured or semi-structured and high velocity",
        "feedback": "Correct."
      },
      {
        "text": "Pre-validated",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 2,
    "explanation": "Streams arrive rapidly and may include text, media and changing metadata.",
    "hint": "Think variety plus speed.",
    "memoryTip": "Streaming systems prioritise continuous ingestion and timely processing."
  },
  {
    "id": 26,
    "topic": "Data Quality",
    "subtopic": "Feature extraction",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "A major challenge of unstructured data is:",
    "options": [
      {
        "text": "Extracting useful features",
        "feedback": "Correct."
      },
      {
        "text": "Overly rigid schemas",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Inability to store large files",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Cloud incompatibility",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Text, images and audio need specialised processing before conventional analysis.",
    "hint": "The data can be stored, but how is it analysed?",
    "memoryTip": "Feature extraction turns raw unstructured content into usable representations."
  },
  {
    "id": 27,
    "topic": "Databases",
    "subtopic": "ACID",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Relational databases are preferred when:",
    "options": [
      {
        "text": "Schemas must change every second",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Strong consistency and ACID transactions are required",
        "feedback": "Correct."
      },
      {
        "text": "Only ultralow-latency caching matters",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Data is entirely unstructured",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 1,
    "explanation": "Relational systems are strong choices for structured transactional workloads requiring integrity and consistency.",
    "hint": "Think reliable transactions.",
    "memoryTip": "ACID: atomicity, consistency, isolation and durability."
  },
  {
    "id": 28,
    "topic": "Cloud & Storage",
    "subtopic": "Hybrid architecture",
    "difficulty": "Easy",
    "questionType": "Concept",
    "question": "Sensitive data remains on local servers while cloud compute performs analytics. This is:",
    "options": [
      {
        "text": "Public-only cloud",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Private-only cloud",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Hybrid architecture",
        "feedback": "Correct."
      },
      {
        "text": "Multitenant SaaS",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 2,
    "explanation": "Hybrid architecture combines on-premises resources with cloud services.",
    "hint": "Two environments are being combined.",
    "memoryTip": "Hybrid designs can balance control with cloud scale, while adding integration complexity."
  },
  {
    "id": 29,
    "topic": "AI & Computer Vision",
    "subtopic": "Vision tasks",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Which computer-vision task locates and labels multiple objects in an image?",
    "options": [
      {
        "text": "Image classification",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Object detection",
        "feedback": "Correct."
      },
      {
        "text": "Tokenisation",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Sentiment analysis",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 1,
    "explanation": "Object detection predicts both object classes and their locations, normally with bounding boxes.",
    "hint": "The question requires both what and where.",
    "memoryTip": "Classification labels a whole image; detection finds objects; segmentation labels pixels."
  },
  {
    "id": 30,
    "topic": "Statistics",
    "subtopic": "A/B testing",
    "difficulty": "Hard",
    "questionType": "Scenario",
    "question": "An A/B test reports p=0.03 but only a 0.01% uplift. What should the team consider next?",
    "options": [
      {
        "text": "Deploy automatically",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Ignore sample size",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Assess practical significance and implementation cost",
        "feedback": "Correct."
      },
      {
        "text": "Conclude causation is impossible",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 2,
    "explanation": "Statistical significance does not guarantee that an effect is commercially meaningful.",
    "hint": "Significant is not always valuable.",
    "memoryTip": "Compare effect size and confidence interval with the minimum worthwhile impact."
  }
] as const;
export type Question = typeof questions[number];
