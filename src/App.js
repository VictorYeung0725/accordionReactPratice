import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import Question from './Question';
function App() {
  const [questions, setQuestion] = useState(data);

  console.log(questions);

  return (
    <main>
      <div className="container">
        <h3>Question and Answer about login</h3>
        <section className="info">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
