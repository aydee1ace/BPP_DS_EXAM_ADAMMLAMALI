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
  },
  {
    "id": 31,
    "topic": "Platforms, Processing & Storage",
    "subtopic": "Platforms and storage",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Which statement best distinguishes cloud computing from traditional on-premises infrastructure?",
    "options": [
      {
        "text": "Cloud resources can usually be provisioned and scaled on demand",
        "feedback": "Correct."
      },
      {
        "text": "Cloud systems never require security controls",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "On-premises systems cannot store large datasets",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Cloud computing removes all operational costs",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Cloud platforms generally allow resources to be provisioned and scaled on demand. They do not remove security responsibilities or all costs.",
    "hint": "Think about how quickly computing capacity can be increased or reduced.",
    "memoryTip": "Cloud platforms generally allow resources to be provisioned and scaled on demand. They do not remove security responsibilities or all costs."
  },
  {
    "id": 32,
    "topic": "Platforms, Processing & Storage",
    "subtopic": "Platforms and storage",
    "difficulty": "Medium",
    "questionType": "Scenario",
    "question": "An organisation must keep a highly sensitive legacy workload within its own controlled data centre. Which option is most directly aligned with that requirement?",
    "options": [
      {
        "text": "On-premises infrastructure",
        "feedback": "Correct."
      },
      {
        "text": "A public social media API",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "An open-data portal",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A content delivery network",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "On-premises infrastructure is hosted within facilities controlled by the organisation, making it the most direct fit for this stated requirement.",
    "hint": "Focus on where the hardware and data are physically controlled.",
    "memoryTip": "On-premises infrastructure is hosted within facilities controlled by the organisation, making it the most direct fit for this stated requirement."
  },
  {
    "id": 33,
    "topic": "Platforms, Processing & Storage",
    "subtopic": "Platforms and storage",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is a common benefit of a hybrid architecture?",
    "options": [
      {
        "text": "It combines on-premises control with selected cloud services",
        "feedback": "Correct."
      },
      {
        "text": "It guarantees that every workload is cheaper",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "It removes the need for integration",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "It requires all data to be public",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "A hybrid architecture combines on-premises and cloud components. Its benefit depends on good integration, governance and workload selection.",
    "hint": "Hybrid means using more than one deployment model.",
    "memoryTip": "A hybrid architecture combines on-premises and cloud components. Its benefit depends on good integration, governance and workload selection."
  },
  {
    "id": 34,
    "topic": "Platforms, Processing & Storage",
    "subtopic": "Platforms and storage",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Which processing approach is most suitable when a fraud decision is required immediately after a card transaction arrives?",
    "options": [
      {
        "text": "Real-time or stream processing",
        "feedback": "Correct."
      },
      {
        "text": "Annual batch processing",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Manual spreadsheet consolidation",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Archival storage",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Real-time or stream processing is designed to process events with low latency as they arrive.",
    "hint": "The decision must be made as events arrive.",
    "memoryTip": "Real-time or stream processing is designed to process events with low latency as they arrive."
  },
  {
    "id": 35,
    "topic": "Platforms, Processing & Storage",
    "subtopic": "Platforms and storage",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "When is batch processing usually the better fit?",
    "options": [
      {
        "text": "When a large set of records can be processed together on a schedule",
        "feedback": "Correct."
      },
      {
        "text": "When every event requires an immediate reaction",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "When no data is available",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "When the output must never be stored",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Batch processing is appropriate when records can be collected and processed together, such as an overnight reporting job.",
    "hint": "Consider whether immediate processing is necessary.",
    "memoryTip": "Batch processing is appropriate when records can be collected and processed together, such as an overnight reporting job."
  },
  {
    "id": 36,
    "topic": "Platforms, Processing & Storage",
    "subtopic": "Platforms and storage",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is horizontal scaling?",
    "options": [
      {
        "text": "Adding more machines or service instances",
        "feedback": "Correct."
      },
      {
        "text": "Adding more memory to one machine only",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Reducing the number of data sources",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Converting rows into columns",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Horizontal scaling adds machines, nodes or service instances. Vertical scaling increases the resources of an existing machine.",
    "hint": "The word horizontal suggests spreading work across additional units.",
    "memoryTip": "Horizontal scaling adds machines, nodes or service instances. Vertical scaling increases the resources of an existing machine."
  },
  {
    "id": 37,
    "topic": "Platforms, Processing & Storage",
    "subtopic": "Platforms and storage",
    "difficulty": "Medium",
    "questionType": "Scenario",
    "question": "Why might an organisation use object storage for a data lake?",
    "options": [
      {
        "text": "It can store large volumes of diverse files and objects",
        "feedback": "Correct."
      },
      {
        "text": "It enforces relational foreign keys on every file",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "It only supports small structured tables",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "It automatically makes all data accurate",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Object storage is suited to large volumes of diverse data such as logs, images and files. Data quality and governance still need to be managed.",
    "hint": "Think about variety and scale rather than relational constraints.",
    "memoryTip": "Object storage is suited to large volumes of diverse data such as logs, images and files. Data quality and governance still need to be managed."
  },
  {
    "id": 38,
    "topic": "Database Systems",
    "subtopic": "Database systems",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is the main purpose of a primary key in a relational table?",
    "options": [
      {
        "text": "To uniquely identify each row",
        "feedback": "Correct."
      },
      {
        "text": "To compress every column",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "To encrypt the database",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "To generate a dashboard",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "A primary key uniquely identifies each record and supports reliable relationships and updates.",
    "hint": "Think about row identity.",
    "memoryTip": "A primary key uniquely identifies each record and supports reliable relationships and updates."
  },
  {
    "id": 39,
    "topic": "Database Systems",
    "subtopic": "Database systems",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Which feature is most strongly associated with relational databases?",
    "options": [
      {
        "text": "Structured tables linked through keys",
        "feedback": "Correct."
      },
      {
        "text": "Documents that may all have different fields",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Unbounded event streams only",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Image recognition",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Relational databases organise structured data into tables and use keys to represent relationships.",
    "hint": "Consider rows, columns and relationships.",
    "memoryTip": "Relational databases organise structured data into tables and use keys to represent relationships."
  },
  {
    "id": 40,
    "topic": "Database Systems",
    "subtopic": "Database systems",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Why is normalisation used in relational database design?",
    "options": [
      {
        "text": "To reduce unnecessary duplication and improve data integrity",
        "feedback": "Correct."
      },
      {
        "text": "To make every query slower",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "To convert all data into images",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "To remove all relationships",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Normalisation separates data into related tables to reduce redundancy and anomalies, although highly normalised designs can require more joins.",
    "hint": "Think about repeated data and update problems.",
    "memoryTip": "Normalisation separates data into related tables to reduce redundancy and anomalies, although highly normalised designs can require more joins."
  },
  {
    "id": 41,
    "topic": "Database Systems",
    "subtopic": "Database systems",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is a data warehouse primarily designed for?",
    "options": [
      {
        "text": "Integrated historical analysis and reporting",
        "feedback": "Correct."
      },
      {
        "text": "Running a single user's word processor",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Real-time control of a physical motor",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Storing only temporary browser files",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "A data warehouse combines and structures data for reporting, historical analysis and decision support.",
    "hint": "Think about analytics across time and sources.",
    "memoryTip": "A data warehouse combines and structures data for reporting, historical analysis and decision support."
  },
  {
    "id": 42,
    "topic": "Database Systems",
    "subtopic": "Database systems",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What does OLAP support particularly well?",
    "options": [
      {
        "text": "Multidimensional analysis such as slicing by time, product and region",
        "feedback": "Correct."
      },
      {
        "text": "Editing individual operational transactions",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Compiling application source code",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Collecting only unstructured video",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Online analytical processing supports fast, multidimensional analysis and aggregations across business dimensions.",
    "hint": "OLAP is associated with analytical exploration across dimensions.",
    "memoryTip": "Online analytical processing supports fast, multidimensional analysis and aggregations across business dimensions."
  },
  {
    "id": 43,
    "topic": "Database Systems",
    "subtopic": "Database systems",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Which workload is most characteristic of an OLTP system?",
    "options": [
      {
        "text": "Recording many short day-to-day business transactions",
        "feedback": "Correct."
      },
      {
        "text": "Running complex historical aggregations across many years",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Training a deep neural network",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Archiving static images",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Online transaction processing supports frequent inserts and updates such as orders, payments and account changes.",
    "hint": "Think about operational transactions rather than analytical reporting.",
    "memoryTip": "Online transaction processing supports frequent inserts and updates such as orders, payments and account changes."
  },
  {
    "id": 44,
    "topic": "Database Systems",
    "subtopic": "Database systems",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "When can a document-oriented NoSQL database be a good choice?",
    "options": [
      {
        "text": "When records have flexible or evolving structures",
        "feedback": "Correct."
      },
      {
        "text": "When every relationship requires strict relational joins",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "When the dataset contains no documents or records",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "When ACID transactions across many tables are the only concern",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Document databases can suit semi-structured data and evolving schemas. The trade-offs depend on consistency, relationships and query requirements.",
    "hint": "Consider changing fields and semi-structured records.",
    "memoryTip": "Document databases can suit semi-structured data and evolving schemas. The trade-offs depend on consistency, relationships and query requirements."
  },
  {
    "id": 45,
    "topic": "Database Systems",
    "subtopic": "Database systems",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is a key trade-off of some NoSQL systems?",
    "options": [
      {
        "text": "Greater flexibility or scale can come with weaker relational capabilities or different consistency guarantees",
        "feedback": "Correct."
      },
      {
        "text": "They can never scale horizontally",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "They require every record to have an identical schema",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "They only run on personal computers",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Some NoSQL systems favour flexible schemas, availability or horizontal scale, while offering different transaction, consistency and join capabilities.",
    "hint": "NoSQL designs optimise for different priorities from relational systems.",
    "memoryTip": "Some NoSQL systems favour flexible schemas, availability or horizontal scale, while offering different transaction, consistency and join capabilities."
  },
  {
    "id": 46,
    "topic": "Database Systems",
    "subtopic": "Database systems",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Which technology is most suitable for representing highly connected relationships such as social networks or fraud rings?",
    "options": [
      {
        "text": "A graph database",
        "feedback": "Correct."
      },
      {
        "text": "A flat text file only",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A slide presentation",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A bitmap editor",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Graph databases model entities as nodes and connections as relationships, making traversals across connected data a natural operation.",
    "hint": "Think about nodes and relationships.",
    "memoryTip": "Graph databases model entities as nodes and connections as relationships, making traversals across connected data a natural operation."
  },
  {
    "id": 47,
    "topic": "Database Systems",
    "subtopic": "Database systems",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is the main reason to create a database index?",
    "options": [
      {
        "text": "To speed up suitable searches and retrievals",
        "feedback": "Correct."
      },
      {
        "text": "To guarantee that every query uses less storage",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "To replace backups",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "To remove the need for data modelling",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Indexes can speed up reads and filtering, but consume storage and can add overhead to inserts and updates.",
    "hint": "An index works like a lookup structure.",
    "memoryTip": "Indexes can speed up reads and filtering, but consume storage and can add overhead to inserts and updates."
  },
  {
    "id": 48,
    "topic": "Database Systems",
    "subtopic": "Database systems",
    "difficulty": "Medium",
    "questionType": "Scenario",
    "question": "A query is slow because it repeatedly scans a very large table using the same selective filter. What is a sensible first investigation?",
    "options": [
      {
        "text": "Whether an appropriate index and query plan exist",
        "feedback": "Correct."
      },
      {
        "text": "Whether the table name is attractive",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Whether all columns can be converted to images",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Whether testing can be removed",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Inspecting the execution plan and relevant indexes is a sensible diagnostic step. Index design must still reflect the wider workload.",
    "hint": "Focus on how the database locates the selected rows.",
    "memoryTip": "Inspecting the execution plan and relevant indexes is a sensible diagnostic step. Index design must still reflect the wider workload."
  },
  {
    "id": 49,
    "topic": "Statistical & Mathematical Methods",
    "subtopic": "Statistical methods",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What does a confidence interval communicate?",
    "options": [
      {
        "text": "A range produced by a method intended to quantify uncertainty around an estimate",
        "feedback": "Correct."
      },
      {
        "text": "The probability that every observation is correct",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A guarantee that a model will work in production",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "The number of database tables",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "A confidence interval quantifies uncertainty using a defined repeated-sampling procedure; it is not a guarantee about model performance.",
    "hint": "It is about uncertainty in an estimate.",
    "memoryTip": "A confidence interval quantifies uncertainty using a defined repeated-sampling procedure; it is not a guarantee about model performance."
  },
  {
    "id": 50,
    "topic": "Statistical & Mathematical Methods",
    "subtopic": "Statistical methods",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Why does correlation not establish causation?",
    "options": [
      {
        "text": "An association may be explained by confounding, reverse direction or coincidence",
        "feedback": "Correct."
      },
      {
        "text": "Correlations can only be calculated for text",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Causal relationships never produce correlations",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Correlation requires experimental proof",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Correlation describes association. Establishing causality requires an appropriate design and assumptions that address alternative explanations.",
    "hint": "Two variables moving together does not reveal the mechanism.",
    "memoryTip": "Correlation describes association. Establishing causality requires an appropriate design and assumptions that address alternative explanations."
  },
  {
    "id": 51,
    "topic": "Statistical & Mathematical Methods",
    "subtopic": "Statistical methods",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is overfitting?",
    "options": [
      {
        "text": "A model learns training-specific noise and generalises poorly",
        "feedback": "Correct."
      },
      {
        "text": "A model is too small to store any parameters",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A database contains duplicate keys",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A pipeline processes data too slowly",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Overfitting occurs when a model fits training data too closely, including noise, and performs worse on unseen examples.",
    "hint": "Compare training performance with performance on unseen data.",
    "memoryTip": "Overfitting occurs when a model fits training data too closely, including noise, and performs worse on unseen examples."
  },
  {
    "id": 52,
    "topic": "Statistical & Mathematical Methods",
    "subtopic": "Statistical methods",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is the purpose of a validation set?",
    "options": [
      {
        "text": "To support model and hyperparameter selection without using the final test set",
        "feedback": "Correct."
      },
      {
        "text": "To replace all training data",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "To guarantee unbiased source data",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "To store application logs",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "A validation set supports tuning and model selection. The test set should remain separate for the final estimate of generalisation.",
    "hint": "It helps make choices before the final evaluation.",
    "memoryTip": "A validation set supports tuning and model selection. The test set should remain separate for the final estimate of generalisation."
  },
  {
    "id": 53,
    "topic": "Statistical & Mathematical Methods",
    "subtopic": "Statistical methods",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Which metric can be misleading for a dataset where only 1% of cases are positive?",
    "options": [
      {
        "text": "Accuracy used on its own",
        "feedback": "Correct."
      },
      {
        "text": "Recall",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Precision",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "The confusion matrix",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Accuracy alone can hide poor minority-class performance in imbalanced data. Precision, recall, PR-AUC and the confusion matrix can provide more insight.",
    "hint": "A model predicting the majority class can appear successful.",
    "memoryTip": "Accuracy alone can hide poor minority-class performance in imbalanced data. Precision, recall, PR-AUC and the confusion matrix can provide more insight."
  },
  {
    "id": 54,
    "topic": "Statistical & Mathematical Methods",
    "subtopic": "Statistical methods",
    "difficulty": "Medium",
    "questionType": "Scenario",
    "question": "What does regularisation aim to do in predictive modelling?",
    "options": [
      {
        "text": "Penalise model complexity to help control overfitting",
        "feedback": "Correct."
      },
      {
        "text": "Create more missing values",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Guarantee perfect accuracy",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Replace feature engineering in every case",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Regularisation discourages overly complex parameter values and can improve generalisation, though its effect depends on the model and data.",
    "hint": "It adds a penalty related to model complexity.",
    "memoryTip": "Regularisation discourages overly complex parameter values and can improve generalisation, though its effect depends on the model and data."
  },
  {
    "id": 55,
    "topic": "Statistical & Mathematical Methods",
    "subtopic": "Statistical methods",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Why should a time-series dataset normally be split chronologically rather than randomly?",
    "options": [
      {
        "text": "To avoid training on information from the future",
        "feedback": "Correct."
      },
      {
        "text": "To ensure every period has identical values",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "To remove seasonality",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "To turn the target into a category",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Chronological splitting helps prevent future information leaking into training and better reflects the intended forecasting process.",
    "hint": "Think about information that would not exist at prediction time.",
    "memoryTip": "Chronological splitting helps prevent future information leaking into training and better reflects the intended forecasting process."
  },
  {
    "id": 56,
    "topic": "Advanced Analytics, ML & AI",
    "subtopic": "Machine learning and AI",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Which method would you use to identify groups of customers with similar behaviour when no group labels are supplied?",
    "options": [
      {
        "text": "K-means clustering",
        "feedback": "Correct."
      },
      {
        "text": "Linear regression",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "ARIMA forecasting",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Binary logistic regression",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "K-means is an unsupervised clustering algorithm that groups observations according to similarity in the selected feature space.",
    "hint": "No target label is supplied, so this is unsupervised learning.",
    "memoryTip": "K-means is an unsupervised clustering algorithm that groups observations according to similarity in the selected feature space."
  },
  {
    "id": 57,
    "topic": "Advanced Analytics, ML & AI",
    "subtopic": "Machine learning and AI",
    "difficulty": "Medium",
    "questionType": "Scenario",
    "question": "A model predicting customer churn from labelled historical examples is an instance of what?",
    "options": [
      {
        "text": "Supervised predictive modelling",
        "feedback": "Correct."
      },
      {
        "text": "Unsupervised clustering",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Random data storage",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Source control",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Learning from examples with known outcomes is supervised learning.",
    "hint": "The historical outcome acts as a target label.",
    "memoryTip": "Learning from examples with known outcomes is supervised learning."
  },
  {
    "id": 58,
    "topic": "Advanced Analytics, ML & AI",
    "subtopic": "Machine learning and AI",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is classification used to predict?",
    "options": [
      {
        "text": "A discrete category or class",
        "feedback": "Correct."
      },
      {
        "text": "Only a continuous monetary amount",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "The physical location of a server rack",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A database schema",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Classification predicts categorical outcomes, while regression is commonly used for continuous numerical targets.",
    "hint": "Think of outcomes such as fraud or not fraud.",
    "memoryTip": "Classification predicts categorical outcomes, while regression is commonly used for continuous numerical targets."
  },
  {
    "id": 59,
    "topic": "Advanced Analytics, ML & AI",
    "subtopic": "Machine learning and AI",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Why are ensemble methods such as random forests often effective?",
    "options": [
      {
        "text": "They combine multiple models to improve robustness or predictive performance",
        "feedback": "Correct."
      },
      {
        "text": "They use no data",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "They always produce perfectly explainable rules",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "They remove the need for evaluation",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Random forests aggregate many decision trees, which can reduce variance and improve predictive performance compared with a single tree.",
    "hint": "Ensemble means combining several learners.",
    "memoryTip": "Random forests aggregate many decision trees, which can reduce variance and improve predictive performance compared with a single tree."
  },
  {
    "id": 60,
    "topic": "Advanced Analytics, ML & AI",
    "subtopic": "Machine learning and AI",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is concept drift?",
    "options": [
      {
        "text": "A change over time in the relationship between inputs and the target",
        "feedback": "Correct."
      },
      {
        "text": "A spelling mistake in source code",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A database backup",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A fixed statistical distribution",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Concept drift occurs when the predictive relationship changes, which can degrade model performance and require monitoring or retraining.",
    "hint": "Production conditions may change after deployment.",
    "memoryTip": "Concept drift occurs when the predictive relationship changes, which can degrade model performance and require monitoring or retraining."
  },
  {
    "id": 61,
    "topic": "Advanced Analytics, ML & AI",
    "subtopic": "Machine learning and AI",
    "difficulty": "Medium",
    "questionType": "Scenario",
    "question": "Which approach best supports a low-latency fraud model subject to changing patterns?",
    "options": [
      {
        "text": "Efficient online scoring with monitoring and a controlled retraining process",
        "feedback": "Correct."
      },
      {
        "text": "A very large model refreshed once every ten years",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Manual annual review with no production monitoring",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Using accuracy alone and ignoring response time",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "A practical design combines efficient scoring with monitoring for performance and drift, plus a governed retraining and release process.",
    "hint": "Balance immediate decisions with change over time.",
    "memoryTip": "A practical design combines efficient scoring with monitoring for performance and drift, plus a governed retraining and release process."
  },
  {
    "id": 62,
    "topic": "Advanced Analytics, ML & AI",
    "subtopic": "Machine learning and AI",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is data leakage?",
    "options": [
      {
        "text": "Using information during training that would not legitimately be available when predictions are made",
        "feedback": "Correct."
      },
      {
        "text": "Compressing a dataset",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Encrypting a database",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Removing duplicate rows",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Data leakage gives the model illegitimate information and can produce unrealistically strong evaluation results.",
    "hint": "Ask whether the feature would exist at prediction time.",
    "memoryTip": "Data leakage gives the model illegitimate information and can produce unrealistically strong evaluation results."
  },
  {
    "id": 63,
    "topic": "Advanced Analytics, ML & AI",
    "subtopic": "Machine learning and AI",
    "difficulty": "Medium",
    "questionType": "Scenario",
    "question": "Why might a simpler model be selected over a slightly more accurate complex model?",
    "options": [
      {
        "text": "It may better satisfy latency, cost, explainability or hardware constraints",
        "feedback": "Correct."
      },
      {
        "text": "Complex models are never useful",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Simple models always have higher accuracy",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Production systems have unlimited resources",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "A simpler model may be preferable when it meets business performance needs while reducing latency, cost, energy use or explanation difficulty.",
    "hint": "Model selection involves operational trade-offs as well as accuracy.",
    "memoryTip": "A simpler model may be preferable when it meets business performance needs while reducing latency, cost, energy use or explanation difficulty."
  },
  {
    "id": 64,
    "topic": "Advanced Analytics, ML & AI",
    "subtopic": "Machine learning and AI",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is simulation particularly useful for?",
    "options": [
      {
        "text": "Exploring possible system behaviours under different assumptions without directly changing the real system",
        "feedback": "Correct."
      },
      {
        "text": "Guaranteeing the future",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Replacing every observation with a guess",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Creating relational primary keys",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Simulation allows scenarios and uncertainties to be explored in a model of the system, but results depend on assumptions and input quality.",
    "hint": "It creates a representation of a process or system.",
    "memoryTip": "Simulation allows scenarios and uncertainties to be explored in a model of the system, but results depend on assumptions and input quality."
  },
  {
    "id": 65,
    "topic": "Advanced Analytics, ML & AI",
    "subtopic": "Machine learning and AI",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is an optimisation algorithm trying to do?",
    "options": [
      {
        "text": "Find a solution that minimises or maximises an objective subject to constraints",
        "feedback": "Correct."
      },
      {
        "text": "Store images in a database",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Convert all categories into text",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Prove that data is unbiased",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Optimisation searches for a good or best feasible solution according to an objective and specified constraints.",
    "hint": "Think about objectives, decision variables and constraints.",
    "memoryTip": "Optimisation searches for a good or best feasible solution according to an objective and specified constraints."
  },
  {
    "id": 66,
    "topic": "Computer Vision & NLP",
    "subtopic": "Computer vision and NLP",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Which task is an example of computer vision?",
    "options": [
      {
        "text": "Detecting damaged components in photographs",
        "feedback": "Correct."
      },
      {
        "text": "Predicting sales from a tabular dataset only",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Joining two relational tables",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Versioning source code",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Identifying objects or defects in images is a computer-vision task.",
    "hint": "Computer vision analyses visual information.",
    "memoryTip": "Identifying objects or defects in images is a computer-vision task."
  },
  {
    "id": 67,
    "topic": "Computer Vision & NLP",
    "subtopic": "Computer vision and NLP",
    "difficulty": "Medium",
    "questionType": "Scenario",
    "question": "Which step is essential before many NLP models can work with text?",
    "options": [
      {
        "text": "Representing text numerically",
        "feedback": "Correct."
      },
      {
        "text": "Deleting every word",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Converting all text to images",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Avoiding tokenisation in every situation",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Text is transformed into numerical representations, for example counts, TF-IDF vectors or learned embeddings.",
    "hint": "Models operate on numbers rather than raw language strings.",
    "memoryTip": "Text is transformed into numerical representations, for example counts, TF-IDF vectors or learned embeddings."
  },
  {
    "id": 68,
    "topic": "Computer Vision & NLP",
    "subtopic": "Computer vision and NLP",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is tokenisation in NLP?",
    "options": [
      {
        "text": "Breaking text into units such as words, subwords or symbols",
        "feedback": "Correct."
      },
      {
        "text": "Encrypting every sentence",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Removing the target variable",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Joining database tables",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Tokenisation segments text into units that downstream NLP processes and models can represent and analyse.",
    "hint": "Think about dividing text into processable units.",
    "memoryTip": "Tokenisation segments text into units that downstream NLP processes and models can represent and analyse."
  },
  {
    "id": 69,
    "topic": "Computer Vision & NLP",
    "subtopic": "Computer vision and NLP",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is an embedding?",
    "options": [
      {
        "text": "A dense numerical representation intended to capture useful properties or relationships",
        "feedback": "Correct."
      },
      {
        "text": "A backup copy of a database",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A relational constraint",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A source-control branch",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Embeddings represent words, documents, images or other entities as numerical vectors in which useful relationships may be captured.",
    "hint": "It maps an item into a numerical vector space.",
    "memoryTip": "Embeddings represent words, documents, images or other entities as numerical vectors in which useful relationships may be captured."
  },
  {
    "id": 70,
    "topic": "Computer Vision & NLP",
    "subtopic": "Computer vision and NLP",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is sentiment analysis designed to identify?",
    "options": [
      {
        "text": "The expressed attitude or polarity in text",
        "feedback": "Correct."
      },
      {
        "text": "The size of an image file",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A database foreign key",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "The optimal warehouse index",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Sentiment analysis attempts to classify or score attitudes expressed in text, subject to context, ambiguity and domain limitations.",
    "hint": "It is an NLP task concerned with expressed opinion.",
    "memoryTip": "Sentiment analysis attempts to classify or score attitudes expressed in text, subject to context, ambiguity and domain limitations."
  },
  {
    "id": 71,
    "topic": "Resources & Trade-offs",
    "subtopic": "Production constraints",
    "difficulty": "Medium",
    "questionType": "Scenario",
    "question": "When deploying a model at scale, which is a key operational concern?",
    "options": [
      {
        "text": "Balancing predictive performance with latency and computational cost",
        "feedback": "Correct."
      },
      {
        "text": "Always selecting the largest possible model",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Maximising memory use regardless of need",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Ignoring failure handling",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "A production model must satisfy performance requirements while operating within latency, throughput, cost and reliability constraints.",
    "hint": "Production quality involves more than offline accuracy.",
    "memoryTip": "A production model must satisfy performance requirements while operating within latency, throughput, cost and reliability constraints."
  },
  {
    "id": 72,
    "topic": "Resources & Trade-offs",
    "subtopic": "Production constraints",
    "difficulty": "Medium",
    "questionType": "Scenario",
    "question": "A team chooses a compact model because it must run on a low-power device. What does this demonstrate?",
    "options": [
      {
        "text": "Respecting hardware and resource constraints",
        "feedback": "Correct."
      },
      {
        "text": "Ignoring the deployment environment",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Eliminating the need for testing",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Choosing a database normal form",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Model choice should account for the compute, memory, power and latency available in the intended environment.",
    "hint": "The deployment device limits available compute and energy.",
    "memoryTip": "Model choice should account for the compute, memory, power and latency available in the intended environment."
  },
  {
    "id": 73,
    "topic": "Resources & Trade-offs",
    "subtopic": "Production constraints",
    "difficulty": "Medium",
    "questionType": "Scenario",
    "question": "What is the purpose of model monitoring after deployment?",
    "options": [
      {
        "text": "To detect issues such as performance degradation, drift and operational failures",
        "feedback": "Correct."
      },
      {
        "text": "To guarantee the model never needs review",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "To replace all pre-deployment testing",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "To make source data private automatically",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Monitoring provides evidence about data, predictions, performance and system health so emerging issues can be investigated.",
    "hint": "Production conditions and data can change.",
    "memoryTip": "Monitoring provides evidence about data, predictions, performance and system health so emerging issues can be investigated."
  },
  {
    "id": 74,
    "topic": "Resources & Trade-offs",
    "subtopic": "Production constraints",
    "difficulty": "Medium",
    "questionType": "Scenario",
    "question": "Why can a highly accurate model still be unsuitable for production?",
    "options": [
      {
        "text": "It may violate latency, cost, explainability, fairness or maintainability requirements",
        "feedback": "Correct."
      },
      {
        "text": "Accuracy is never relevant",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Production models cannot use features",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "All complex models are prohibited",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Accuracy is only one criterion. A model also needs to meet operational, governance and stakeholder requirements.",
    "hint": "Consider the full set of acceptance criteria.",
    "memoryTip": "Accuracy is only one criterion. A model also needs to meet operational, governance and stakeholder requirements."
  },
  {
    "id": 75,
    "topic": "Development Standards",
    "subtopic": "Development standards",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Why is Git important in analytical development?",
    "options": [
      {
        "text": "It records and manages changes to source files and supports collaboration",
        "feedback": "Correct."
      },
      {
        "text": "It automatically proves every model is correct",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "It replaces all testing",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "It stores only production data",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Git is a version-control system used to track changes, collaborate through branches and reviews, and restore prior versions.",
    "hint": "Think about the history of code changes.",
    "memoryTip": "Git is a version-control system used to track changes, collaborate through branches and reviews, and restore prior versions."
  },
  {
    "id": 76,
    "topic": "Development Standards",
    "subtopic": "Development standards",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What does a unit test check?",
    "options": [
      {
        "text": "A small component behaves as expected in isolation",
        "feedback": "Correct."
      },
      {
        "text": "The entire organisation follows one strategy",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Every dataset is unbiased",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A model will always perform best",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Unit tests validate focused pieces of logic such as a function or transformation under defined conditions.",
    "hint": "Unit means a small testable component.",
    "memoryTip": "Unit tests validate focused pieces of logic such as a function or transformation under defined conditions."
  },
  {
    "id": 77,
    "topic": "Development Standards",
    "subtopic": "Development standards",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is the purpose of an integration test in a data pipeline?",
    "options": [
      {
        "text": "To check that connected components work together correctly",
        "feedback": "Correct."
      },
      {
        "text": "To measure only the colour of a dashboard",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "To avoid using source control",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "To replace data validation",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Integration tests verify that components such as ingestion, transformation and storage interact as expected.",
    "hint": "The focus is on interactions between components.",
    "memoryTip": "Integration tests verify that components such as ingestion, transformation and storage interact as expected."
  },
  {
    "id": 78,
    "topic": "Development Standards",
    "subtopic": "Development standards",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Why should production code use logging rather than relying only on print statements?",
    "options": [
      {
        "text": "Structured logs support consistent operational diagnosis and monitoring",
        "feedback": "Correct."
      },
      {
        "text": "Logs make all models accurate",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Print statements are illegal",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Logging removes the need for access controls",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Structured logging records useful operational context and severity consistently, helping teams monitor and diagnose production behaviour.",
    "hint": "Consider tracing behaviour in a running service or pipeline.",
    "memoryTip": "Structured logging records useful operational context and severity consistently, helping teams monitor and diagnose production behaviour."
  },
  {
    "id": 79,
    "topic": "Development Standards",
    "subtopic": "Development standards",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is continuous integration intended to support?",
    "options": [
      {
        "text": "Automatically building and testing changes when code is integrated",
        "feedback": "Correct."
      },
      {
        "text": "Keeping every developer's work permanently separate",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Removing code review",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Publishing secrets in a repository",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Continuous integration automates checks such as builds and tests when changes are proposed or merged.",
    "hint": "It provides fast feedback on integrated changes.",
    "memoryTip": "Continuous integration automates checks such as builds and tests when changes are proposed or merged."
  },
  {
    "id": 80,
    "topic": "Development Standards",
    "subtopic": "Development standards",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What should be done with passwords and API keys used by an application?",
    "options": [
      {
        "text": "Store them in an approved secrets-management mechanism rather than source code",
        "feedback": "Correct."
      },
      {
        "text": "Commit them to a public repository",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Place them in code comments",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Share them in test output",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Credentials should be protected using approved secret storage and access controls, not embedded in source code or logs.",
    "hint": "Secrets should be separated from the codebase.",
    "memoryTip": "Credentials should be protected using approved secret storage and access controls, not embedded in source code or logs."
  },
  {
    "id": 81,
    "topic": "Development Standards",
    "subtopic": "Development standards",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Why is reproducibility important in analytical work?",
    "options": [
      {
        "text": "It allows results to be recreated from defined data, code, configuration and environment",
        "feedback": "Correct."
      },
      {
        "text": "It ensures every model is simple",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "It prevents all data changes",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "It removes the need for documentation",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Reproducibility strengthens verification, troubleshooting and auditability by making inputs, code, dependencies and settings traceable.",
    "hint": "Think about whether another run can recreate the result.",
    "memoryTip": "Reproducibility strengthens verification, troubleshooting and auditability by making inputs, code, dependencies and settings traceable."
  },
  {
    "id": 82,
    "topic": "The Data Landscape",
    "subtopic": "Data landscape",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Which is an example of open data?",
    "options": [
      {
        "text": "A government-published dataset made available for public reuse",
        "feedback": "Correct."
      },
      {
        "text": "A private customer ledger",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "An employee password file",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "An encrypted confidential transaction store",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Government and public bodies may publish datasets for public reuse under stated terms. Their suitability and quality still require evaluation.",
    "hint": "Open data is intentionally made available for reuse.",
    "memoryTip": "Government and public bodies may publish datasets for public reuse under stated terms. Their suitability and quality still require evaluation."
  },
  {
    "id": 83,
    "topic": "The Data Landscape",
    "subtopic": "Data landscape",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Social-media streaming data is commonly characterised as what?",
    "options": [
      {
        "text": "High-velocity and often semi-structured or unstructured",
        "feedback": "Correct."
      },
      {
        "text": "Always small and perfectly structured",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Pre-validated for every analytical purpose",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A relational lookup table only",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Social-media streams can arrive rapidly and contain text, media, metadata and irregular structures.",
    "hint": "Posts and events can arrive rapidly and vary in content.",
    "memoryTip": "Social-media streams can arrive rapidly and contain text, media, metadata and irregular structures."
  },
  {
    "id": 84,
    "topic": "The Data Landscape",
    "subtopic": "Data landscape",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Which is an unstructured data type?",
    "options": [
      {
        "text": "Free-text documents",
        "feedback": "Correct."
      },
      {
        "text": "A relational table with defined columns",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A CSV file with a consistent schema",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A validated dimension table",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Free text does not naturally conform to fixed rows and columns, although metadata or derived features can be structured.",
    "hint": "It does not fit neatly into a predefined tabular schema.",
    "memoryTip": "Free text does not naturally conform to fixed rows and columns, although metadata or derived features can be structured."
  },
  {
    "id": 85,
    "topic": "The Data Landscape",
    "subtopic": "Data landscape",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is a major challenge when analysing unstructured data?",
    "options": [
      {
        "text": "Extracting reliable and useful features from content with no fixed tabular schema",
        "feedback": "Correct."
      },
      {
        "text": "It cannot be stored in cloud systems",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "It is always too small",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "It contains no information",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Unstructured content requires processing to derive usable representations, and meaning may depend heavily on context.",
    "hint": "The difficulty often lies in representation and interpretation.",
    "memoryTip": "Unstructured content requires processing to derive usable representations, and meaning may depend heavily on context."
  },
  {
    "id": 86,
    "topic": "The Data Landscape",
    "subtopic": "Data landscape",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is JSON?",
    "options": [
      {
        "text": "A text-based format for structured or semi-structured data using objects and arrays",
        "feedback": "Correct."
      },
      {
        "text": "A machine-learning accuracy metric",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A relational join type",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "An image-only encoding",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "JSON represents data using objects, arrays and values and is widely used in files, APIs and web services.",
    "hint": "It commonly represents nested key-value data.",
    "memoryTip": "JSON represents data using objects, arrays and values and is widely used in files, APIs and web services."
  },
  {
    "id": 87,
    "topic": "The Data Landscape",
    "subtopic": "Data landscape",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What does an API provide in a data-delivery context?",
    "options": [
      {
        "text": "A defined interface through which systems can request or exchange data",
        "feedback": "Correct."
      },
      {
        "text": "A guarantee that data is complete and unbiased",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A replacement for authentication",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A physical storage device",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "An API exposes defined operations or endpoints for data exchange. Access, quality, limits and contracts still need to be managed.",
    "hint": "It defines how software systems communicate.",
    "memoryTip": "An API exposes defined operations or endpoints for data exchange. Access, quality, limits and contracts still need to be managed."
  },
  {
    "id": 88,
    "topic": "The Data Landscape",
    "subtopic": "Data landscape",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is schema-on-read?",
    "options": [
      {
        "text": "Applying structure when data is read or analysed",
        "feedback": "Correct."
      },
      {
        "text": "Forcing all source data into a fixed schema before storage",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Removing all metadata",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Reading data without interpretation",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Schema-on-read keeps data in a flexible form and applies an analytical structure when it is consumed.",
    "hint": "The structure is interpreted later rather than imposed at ingestion.",
    "memoryTip": "Schema-on-read keeps data in a flexible form and applies an analytical structure when it is consumed."
  },
  {
    "id": 89,
    "topic": "The Data Landscape",
    "subtopic": "Data landscape",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What is schema-on-write?",
    "options": [
      {
        "text": "Validating and organising data into a defined structure before or during storage",
        "feedback": "Correct."
      },
      {
        "text": "Ignoring structure until analysis",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Storing only images",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Removing validation rules",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Schema-on-write applies a predefined model during ingestion, supporting consistency but reducing flexibility for unexpected structures.",
    "hint": "The structure is imposed as data enters the managed store.",
    "memoryTip": "Schema-on-write applies a predefined model during ingestion, supporting consistency but reducing flexibility for unexpected structures."
  },
  {
    "id": 90,
    "topic": "The Data Landscape",
    "subtopic": "Data landscape",
    "difficulty": "Medium",
    "questionType": "Scenario",
    "question": "Before combining datasets from different systems, what should be checked first?",
    "options": [
      {
        "text": "Definitions, identifiers, granularity, time coverage and data quality",
        "feedback": "Correct."
      },
      {
        "text": "Whether they use the same background colour",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Whether every column can be deleted",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Whether source control is disabled",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Datasets should be assessed for semantic meaning, keys, level of detail, time basis and quality before integration.",
    "hint": "Matching column names alone does not establish comparability.",
    "memoryTip": "Datasets should be assessed for semantic meaning, keys, level of detail, time basis and quality before integration."
  },
  {
    "id": 91,
    "topic": "The Data Landscape",
    "subtopic": "Data landscape",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Why is provenance important when evaluating a dataset?",
    "options": [
      {
        "text": "It helps establish where the data came from and how it was produced or transformed",
        "feedback": "Correct."
      },
      {
        "text": "It guarantees perfect predictions",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "It makes all data public",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "It replaces validation",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Knowing the source and transformation history supports trust, interpretation, reproducibility and auditability.",
    "hint": "Provenance is the history and origin of data.",
    "memoryTip": "Knowing the source and transformation history supports trust, interpretation, reproducibility and auditability."
  },
  {
    "id": 92,
    "topic": "The Data Landscape",
    "subtopic": "Data landscape",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "What does seasonality mean in time-series data?",
    "options": [
      {
        "text": "A regular repeating pattern linked to a period",
        "feedback": "Correct."
      },
      {
        "text": "Only a long-term trend",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Random measurement error",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A missing primary key",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Seasonality is a repeating pattern associated with a regular period, distinct from trend and irregular noise.",
    "hint": "Think of patterns that recur daily, weekly or annually.",
    "memoryTip": "Seasonality is a repeating pattern associated with a regular period, distinct from trend and irregular noise."
  },
  {
    "id": 93,
    "topic": "The Data Landscape",
    "subtopic": "Data landscape",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Which issue commonly causes missing data?",
    "options": [
      {
        "text": "Sensor failures, user omissions or integration problems",
        "feedback": "Correct."
      },
      {
        "text": "Primary keys working correctly",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Successful validation",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "A perfectly complete source",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Missingness can arise through non-response, faulty collection, system failures or integration issues, and its cause affects how it should be handled.",
    "hint": "Consider how collection and transfer can fail.",
    "memoryTip": "Missingness can arise through non-response, faulty collection, system failures or integration issues, and its cause affects how it should be handled."
  },
  {
    "id": 94,
    "topic": "The Data Landscape",
    "subtopic": "Data landscape",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Why should duplicate records be investigated rather than automatically deleted?",
    "options": [
      {
        "text": "Some apparent duplicates may represent legitimate repeated events",
        "feedback": "Correct."
      },
      {
        "text": "Duplicates always improve quality",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Deletion has no effect on results",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Every dataset requires identical rows",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Duplicates may be defects or valid repeated observations. Business keys, timestamps and process context should determine treatment.",
    "hint": "Identical-looking rows do not always have identical business meaning.",
    "memoryTip": "Duplicates may be defects or valid repeated observations. Business keys, timestamps and process context should determine treatment."
  },
  {
    "id": 95,
    "topic": "The Data Landscape",
    "subtopic": "Data landscape",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Which characteristic best describes data completeness?",
    "options": [
      {
        "text": "Required values and records are present",
        "feedback": "Correct."
      },
      {
        "text": "Values conform to permitted formats",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "The same definition is used everywhere",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Records arrive immediately",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Completeness measures whether expected records and fields are available; validity, consistency and timeliness address different dimensions.",
    "hint": "Completeness is about absence or presence.",
    "memoryTip": "Completeness measures whether expected records and fields are available; validity, consistency and timeliness address different dimensions."
  },
  {
    "id": 96,
    "topic": "The Data Landscape",
    "subtopic": "Data landscape",
    "difficulty": "Medium",
    "questionType": "Concept",
    "question": "Which characteristic best describes data validity?",
    "options": [
      {
        "text": "Values conform to defined formats, ranges and rules",
        "feedback": "Correct."
      },
      {
        "text": "Every field is populated",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Data has no duplicates",
        "feedback": "This does not best match the scenario."
      },
      {
        "text": "Data is stored in the cloud",
        "feedback": "This does not best match the scenario."
      }
    ],
    "correctAnswer": 0,
    "explanation": "Valid data conforms to syntax, type, range and business-rule expectations; it may still be inaccurate in the real world.",
    "hint": "Validity compares values with defined rules.",
    "memoryTip": "Valid data conforms to syntax, type, range and business-rule expectations; it may still be inaccurate in the real world."
  }
] as const;

export type Question = typeof questions[number];

