import React from 'react';


const Card = ({ name, email, id }) => {
    return (
        <div className="tc bg-dark-green dib br3 pa2 ma2 grow bw2 shadow-10">
            <img alt="robots" src={`https://robohash.org/${id}?100x100`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

// const Card = (props) => {
//     return (
//         <div className="tc bg-dark-green dib br3 pa2 ma2 grow bw2 shadow-10">
//             <img alt="robots" src={`https://robohash.org/${props.id}?100x100`} />
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     );
// }

export default Card




