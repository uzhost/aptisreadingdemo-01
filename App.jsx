import React, { useState } from "react";

const tests = [
  {
    title: "TEST 1",
    options: ["window", "buy", "market", "cake", "watched"],
    questions: [
      {
        text: "I saw some shows in the (market/window/shoe) of one store. I didn't (eat/drink/buy) it.",
        answers: ["window", "buy"],
        choices: [
          ["market", "window", "shoe"],
          ["eat", "drink", "buy"],
        ],
      },
      {
        text: "I buy some food at the (classroom/park/market). I ate (watch/door/cake).",
        answers: ["market", "cake"],
        choices: [
          ["classroom", "park", "market"],
          ["watch", "door", "cake"],
        ],
      },
      {
        text: "I (ate/saw/watched) a program on TV.",
        answers: ["watched"],
        choices: [["ate", "saw", "watched"]],
      },
    ],
    key: ["window", "buy", "market", "cake", "watched"],
  },
  {
    title: "TEST 2",
    options: ["live", "share", "class", "drive", "cook"],
    questions: [
      {
        text: "I (go/live/walk) in a flat.",
        answers: ["live"],
        choices: [["go", "live", "walk"]],
      },
      {
        text: "I (share/drink/hold) it with my friend. We are in the same (door/class/chair). We (drive/smile/say) to work.",
        answers: ["share", "class", "drive"],
        choices: [
          ["share", "drink", "hold"],
          ["door", "class", "chair"],
          ["drive", "smile", "say"],
        ],
      },
      {
        text: "We like to (hold/cook/melt) dinner.",
        answers: ["cook"],
        choices: [["hold", "cook", "melt"]],
      },
    ],
    key: ["live", "share", "class", "drive", "cook"],
  },
  {
    title: "TEST 3",
    options: ["near", "friendly", "practise", "read", "so"],
    questions: [
      {
        text: "I am living with a family (next/near/under) the city. The children are (cruel/noisy/friendly) to me.",
        answers: ["near", "friendly"],
        choices: [
          ["next", "near", "under"],
          ["cruel", "noisy", "friendly"],
        ],
      },
      {
        text: "Seamus and Agnes (read/hold/practise) speaking English with me. Sometimes, I (see/read/say) to Seamus and Agnes.",
        answers: ["practise", "read"],
        choices: [
          ["read", "hold", "practise"],
          ["see", "read", "say"],
        ],
      },
      {
        text: "I hate the food, (then/so/also) yesterday I ate out.",
        answers: ["so"],
        choices: [["then", "so", "also"]],
      },
    ],
    key: ["near", "friendly", "practise", "read", "so"],
  },
  {
    title: "TEST 4",
    options: ["friendly", "walk", "first", "speak", "together"],
    questions: [
      {
        text: "Everyone is (friendly/melty/noisy).",
        answers: ["friendly"],
        choices: [["friendly", "melty", "noisy"]],
      },
      {
        text: "My flat is near university, so I can (train/sleep/walk) to my class.",
        answers: ["walk"],
        choices: [["train", "sleep", "walk"]],
      },
      {
        text: "There is a girl living with me, I met her for the (very/first/one) time.",
        answers: ["first"],
        choices: [["very", "first", "one"]],
      },
      {
        text: "She is from France and she can (talk/say/speak) 5 languages.",
        answers: ["speak"],
        choices: [["talk", "say", "speak"]],
      },
      {
        text: "We eat dinner (toward/together/another).",
        answers: ["together"],
        choices: [["toward", "together", "another"]],
      },
    ],
    key: ["friendly", "walk", "first", "speak", "together"],
  },
  {
    title: "TEST 5",
    options: ["early", "lunch", "leave", "car", "sleepy"],
    questions: [
      {
        text: "I start (sleep/early/angry) in the morning. I have (lunch/ bed/ tutor).",
        answers: ["early", "lunch"],
        choices: [
          ["sleep", "early", "angry"],
          ["lunch", "bed", "tutor"],
        ],
      },
      {
        text: "I (go/leave/return) the office.",
        answers: ["leave"],
        choices: [["go", "leave", "return"]],
      },
      {
        text: "I go home in my new (bag/jeans/car).",
        answers: ["car"],
        choices: [["bag", "jeans", "car"]],
      },
      {
        text: "I go to bed when I feel (sleepy/angry/alert).",
        answers: ["sleepy"],
        choices: [["sleepy", "angry", "alert"]],
      },
    ],
    key: ["early", "lunch", "leave", "car", "sleepy"],
  },
  {
    title: "TEST 6",
    options: ["clear", "sun", "enjoyable", "working", "read"],
    questions: [
      {
        text: "The water is (sour/clear/see).",
        answers: ["clear"],
        choices: [["sour", "clear", "see"]],
      },
      {
        text: "The (wind/dust/sun) is out.",
        answers: ["sun"],
        choices: [["wind", "dust", "sun"]],
      },
      {
        text: "I have an (tired/enjoyable/good) holiday.",
        answers: ["enjoyable"],
        choices: [["tired", "enjoyable", "good"]],
      },
      {
        text: "After (working/sleeping/eating) so hard.",
        answers: ["working"],
        choices: [["working", "sleeping", "eating"]],
      },
      {
        text: "I hope to (tell/read/forward) your letter",
        answers: ["read"],
        choices: [["tell", "read", "forward"]],
      },
    ],
    key: ["clear", "sun", "enjoyable", "working", "read"],
  },
  {
    title: "TEST 7",
    options: ["miss", "called", "ready", "meet", "dinner"],
    questions: [
      {
        text: "I imagine you don't want to (love/remember/miss) this.",
        answers: ["miss"],
        choices: [["love", "remember", "miss"]],
      },
      {
        text: "I (called/told/said) you earlier but you were not home. Can you be (early/sleepy/ready) before 7pm?",
        answers: ["called", "ready"],
        choices: [
          ["called", "told", "said"],
          ["early", "sleepy", "ready"],
        ],
      },
      {
        text: "I can (hold/meet/miss) you at your place then.",
        answers: ["meet"],
        choices: [["hold", "meet", "miss"]],
      },
      {
        text: "Don't have too much (talk/pencil/dinner) because we're going to eat cake.",
        answers: ["dinner"],
        choices: [["talk", "pencil", "dinner"]],
      },
    ],
    key: ["miss", "called", "ready", "meet", "dinner"],
  },
  {
    title: "TEST 8",
    options: ["balance", "statement", "think", "slowly", "before"],
    questions: [
      {
        text: "The budget doesn’t (1)  ",
        answers: ["balance"],
        choices: [["balance", "statement", "think"]],
      },
      {
        text: "Could you get the financial (2)  and check for any errors?",
        answers: ["statement"],
        choices: [["balance", "statement", "think"]],
      },
      {
        text: "I (3) it will help clarify the issue.",
        answers: ["think"],
        choices: [["balance", "statement", "think"]],
      },
      {
        text: "Please read the information (4)  so we don’t miss any details.",
        answers: ["slowly"],
        choices: [["balance", "statement", "slowly"]],
      },
      {
        text: "Also, send me the results (5)  you go home, not after.",
        answers: ["before"],
        choices: [["before", "after", "since"]],
      },
    ],
    key: ["balance", "statement", "think", "slowly", "before"],
  },
  {
    title: "TEST 9",
    options: ["just", "too", "at", "some", "give"],
    questions: [
      {
        text: "It is (yet/not/just) what I like.",
        answers: ["just"],
        choices: [["yet", "not", "just"]],
      },
      {
        text: "And it is the perfect color, (so/too/to).",
        answers: ["too"],
        choices: [["so", "too", "to"]],
      },
      {
        text: "I am going to wear it (to/on/at) my birthday party.",
        answers: ["at"],
        choices: [["to", "on", "at"]],
      },
      {
        text: "I will save you (many/none/some) cake.",
        answers: ["some"],
        choices: [["many", "none", "some"]],
      },
      {
        text: "(Give/Hold/Receive) my love to everyone.",
        answers: ["give"],
        choices: [["Give", "Hold", "Receive"]],
      },
    ],
    key: ["just", "too", "at", "some", "give"],
  },
  {
    title: "TEST 10",
    options: ["late", "meetings", "park", "shop", "cook"],
    questions: [
      {
        text: "I am never (late/soon/early).",
        answers: ["late"],
        choices: [["late", "soon", "early"]],
      },
      {
        text: "In the mornings, I attend (meetings/dinner/breakfast).",
        answers: ["meetings"],
        choices: [["meetings", "dinner", "breakfast"]],
      },
      {
        text: "I eat lunch in the (park/city/village).",
        answers: ["park"],
        choices: [["park", "city", "village"]],
      },
      {
        text: "I buy food from the (shop/window/car).",
        answers: ["shop"],
        choices: [["shop", "window", "car"]],
      },
      {
        text: "I always (cook/drink/breathe) dinner for myself.",
        answers: ["cook"],
        choices: [["cook", "drink", "breathe"]],
      },
    ],
    key: ["late", "meetings", "park", "shop", "cook"],
  },
  {
    title: "TEST 11",
    options: ["great", "boat", "then", "drive", "too"],
    questions: [
      {
        text: "The weather is (cheap/expensive/great).",
        answers: ["great"],
        choices: [["cheap", "expensive", "great"]],
      },
      {
        text: "We are on the (city/countryside/boat).",
        answers: ["boat"],
        choices: [["city", "countryside", "boat"]],
      },
      {
        text: "We eat dinner (after/then/before) we go to church.",
        answers: ["then"],
        choices: [["after", "then", "before"]],
      },
      {
        text: "We are going to (drive/see/talk) around.",
        answers: ["drive"],
        choices: [["drive", "see", "talk"]],
      },
      {
        text: "I hope the weather isn't (too/to/on) hot.",
        answers: ["too"],
        choices: [["too", "to", "on"]],
      },
    ],
    key: ["great", "boat", "then", "drive", "too"],
  },
  {
    title: "TEST 12",
    options: ["long", "details", "copy", "busy", "client"],
    questions: [
      {
        text: "It is a  (long/red/tall) day.",
        answers: ["long"],
        choices: [["long", "red", "tall"]],
      },
      {
        text: "I need the  (work/job/detail) of the report.",
        answers: ["details"],
        choices: [["work", "job", "details"]],
      },
      {
        text: "Can you print a  (information/ copy/ paper) for me?",
        answers: ["copy"],
        choices: [["information", "copy", "paper"]],
      },
      {
        text: "I am  (busy/ table/ round) with my work.",
        answers: ["busy"],
        choices: [["busy", "table", "round"]],
      },
      {
        text: "I will have meetings with my  (neighbor/ wife/ client).",
        answers: ["client"],
        choices: [["neighbor", "wife", "client"]],
      },
    ],
    key: ["long", "details", "copy", "busy", "client"],
  },
];

function App() {
  const [userAnswers, setUserAnswers] = useState(
    tests.map((test) => test.key.map(() => ""))
  );
  const [submitted, setSubmitted] = useState(tests.map(() => false));
  const [results, setResults] = useState(tests.map(() => []));

  const handleChange = (testIdx, ansIdx, value) => {
    setUserAnswers((prev) => {
      const copy = prev.map((arr) => [...arr]);
      copy[testIdx][ansIdx] = value;
      return copy;
    });
  };

  const handleSubmit = (testIdx) => {
    const correct = tests[testIdx].key;
    const user = userAnswers[testIdx];
    const res = user.map((ans, i) => ans.trim().toLowerCase() === correct[i].toLowerCase());
    setResults((prev) => {
      const copy = prev.map((arr) => [...arr]);
      copy[testIdx] = res;
      return copy;
    });
    setSubmitted((prev) => {
      const copy = [...prev];
      copy[testIdx] = true;
      return copy;
    });
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", fontFamily: "sans-serif", padding: 24 }}>
      <h1>Ôn tập Part 1</h1>
      {tests.map((test, testIdx) => {
        let ansIdx = 0;
        return (
          <div key={test.title} style={{ border: "1px solid #ccc", borderRadius: 8, margin: "24px 0", padding: 16 }}>
            <h2>{test.title}</h2>
            {test.questions.map((q, qIdx) => (
              <div key={qIdx} style={{ marginBottom: 12 }}>
                <div>
                  {(() => {
                    // Tách câu hỏi thành các phần để chèn select vào đúng vị trí
                    const parts = q.text.split(/\([^)]*\)/g);
                    const matches = [...q.text.matchAll(/\(([^)]*)\)/g)];
                    let content = [];
                    for (let i = 0; i < parts.length; i++) {
                      content.push(<span key={"part" + i}>{parts[i]}</span>);
                      if (i < matches.length) {
                        const choices = q.choices[i];
                        const value = userAnswers[testIdx][ansIdx];
                        const isSubmitted = submitted[testIdx];
                        const isCorrect = results[testIdx][ansIdx];
                        content.push(
                          <select
                            key={"sel" + i}
                            value={value}
                            disabled={isSubmitted}
                            onChange={e => handleChange(testIdx, ansIdx, e.target.value)}
                            style={{
                              margin: "0 4px",
                              background: isSubmitted ? (isCorrect ? "#c8f7c5" : "#f7c5c5") : undefined,
                              borderColor: isSubmitted ? (isCorrect ? "#2ecc40" : "#e74c3c") : undefined,
                            }}
                          >
                            <option value="">--Chọn--</option>
                            {choices.map((c) => (
                              <option key={c} value={c}>{c}</option>
                            ))}
                          </select>
                        );
                        ansIdx++;
                      }
                    }
                    return content;
                  })()}
                </div>
                {/* Nếu đã submit và sai thì hiện đáp án đúng */}
                {submitted[testIdx] && q.answers.map((ans, i) => {
                  const idx = ansIdx - q.answers.length + i;
                  if (!results[testIdx][idx]) {
                    return (
                      <div key={"ans" + i} style={{ color: "#e74c3c", fontSize: 13 }}>
                        Đáp án đúng: <b>{ans}</b>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            ))}
            <button
              onClick={() => handleSubmit(testIdx)}
              disabled={submitted[testIdx]}
              style={{
                padding: "6px 18px",
                background: submitted[testIdx] ? "#ccc" : "#3498db",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: submitted[testIdx] ? "not-allowed" : "pointer",
                marginTop: 8,
              }}
            >
              Submit
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App; 