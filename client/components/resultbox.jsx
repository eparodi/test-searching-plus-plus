import React from 'react';
import Result from './result.jsx';

export default ({ results = [] }) => (
    <div className="resultbox panel panel-default">
        <div class="panel-body">
            <h2>Resultados:</h2>
            {
                results.map((result, index) =>
                    (<Result result={result} key={index} />))
            }
        </div>
    </div>
);
