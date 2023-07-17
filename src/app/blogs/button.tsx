type Props = {
    onClick: () => void;
    disabled: boolean;
    label: string;
};

export function Button(props: Props) {
    const { onClick, disabled, label } = props;
    return (
        <button className="w-full p-5" onClick={onClick} disabled={disabled}>
            <div className="bg-black text-white">{label}</div>
        </button>
    );
}
