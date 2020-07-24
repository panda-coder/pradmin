import { useEffect } from 'react';

const addBody = classes => document.body.classList.add(classes);
const removeBody = classes => document.body.classList.remove(classes);

export default (className) => {
    useEffect(
        () => {
            className instanceof Array ? className.map(addBody) : addBody(className);

            return () => className instanceof Array ? className.map(removeBody) : removeBody(className);
        },
        [className]
    );
}