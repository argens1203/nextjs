import { options } from './options.const';
import { ButtonWithArrow } from '../button-with-arrow';
import { Link } from '../link';

export function OptionList() {
    return (
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
            {options.map(({ title, text, link }) => (
                <Link to={link}>
                    <ButtonWithArrow title={title} text={text} />
                </Link>
            ))}
        </div>
    );
}
