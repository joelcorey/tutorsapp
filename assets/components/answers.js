import React from 'react';

import Answer from "./answer";

export default function Answers(props) {

    const answers = props.answers.sort(() => Math.random() - 0.5);
    return(
        <>
            <Answer answer={answers[0]} handleQuestionClick={props.handleQuestionClick} />
            <Answer answer={answers[1]} handleQuestionClick={props.handleQuestionClick} />
            <Answer answer={answers[2]} handleQuestionClick={props.handleQuestionClick} />
            <Answer answer={answers[3]} handleQuestionClick={props.handleQuestionClick} />
        </>
    );
}