import React, { Component } from 'react'

class QuizQuestion extends Component {
    render() {
        return (
           <main>
                <section>
                    <p></p>
                </section>
                <section className="buttons">
                  <ul>
                        <li>{this.props.quiz_questions.answear_options[0]}</li>
                  </ul>
                </section>
            </main>
            );
    }
}

export default QuizQuestion