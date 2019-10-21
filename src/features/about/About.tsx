import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const About: React.FC = () => {
  const dispatch = useDispatch();

  const goToTodoList = () => dispatch(push({ pathname: 'todos' }));

  return (
    <section className="about">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        amet asperiores blanditiis dignissimos doloremque excepturi
        exercitationem fuga ipsum libero nam, necessitatibus, nesciunt nihil
        officia omnis optio quia repellendus sint ut.
      </p>
      <button onClick={goToTodoList}>Go to Todo List</button>
    </section>
  );
};

export default About;
