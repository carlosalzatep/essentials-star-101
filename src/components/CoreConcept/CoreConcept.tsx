import './CoreConcept.css';
import type { CoreConceptProps } from '../../types/componentProps';

export const CoreConcept: React.FC<CoreConceptProps> = ({ image, title, description }) => {
    return (
        <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        </li>
    );
}