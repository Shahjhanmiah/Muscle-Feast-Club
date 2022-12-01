import React from 'react';

const Question = () => {
    return (
        <div>
            <div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>How React works ?</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-start">
                            <strong>React</strong> uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and <strong>React will efficiently update and render just the right component</strong> when your data changes.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Explain Difference between props and state.</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body props-state">
                            <div>
                                <h5>Props</h5>
                                <ol>
                                    <li>Props are read-only.</li>
                                    <li>Props are immutable.</li>
                                    <li>Props can be accessed by the child component.</li>
                                    <li>Stateless component can have Props</li>
                                    <li>Props make components reusable.</li>
                                </ol>
                            </div>
                            <div>
                                <h5>State</h5>
                                <ol>
                                    <li>State changes can be asynchronous.</li>
                                    <li>State is mutable..</li>
                                    <li>State cannot be accessed by child components.</li>
                                    <li>Stateless components cannot have State.</li>
                                    <li>State cannot make components reusable.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>In which cases we use useEffect except data loading by fetch ?</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-start">
                            <strong>usecase of useEffect except Fetching API are...</strong> <br />
                            <ol>
                                <li>Running on state change: validating input field.</li>
                                <li>Running on state change: live filtering</li>
                                <li>Running on state change: trigger animation on new array value</li>
                                <li>Running on props change: update paragraph list on fetched API data update</li>
                                <li>Running on props change: updating fetched API data to get BTC updated price</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default Question;