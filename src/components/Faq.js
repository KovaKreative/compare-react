import { useEffect, useState } from 'react';
import './Faq.sass';

import axios from 'axios';

export default function Faq() {

  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res);
        setFaqs(res.data.slice(0, 9));
      })
      .catch(err => {
        this.errors.push(err);
      });
  }, []);

  const faqCards = faqs.map((faq, i) => {
    return (
      <div class="column is-one-third" id={i}>
        <div class="card">
          <div class="card-content">
            <p class="title">{faq.title}</p>
            <p class="answer">{faq.body}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="Faq">
      <div class="container">
        <section class="section">
          <h1 class="title">FAQ</h1>
          <h2 class="subtitle is-4">Lorem ipsum etc.</h2>
          <div class="columns">
            {faqCards}
          </div>
        </section>
      </div>
    </div>
  );
}