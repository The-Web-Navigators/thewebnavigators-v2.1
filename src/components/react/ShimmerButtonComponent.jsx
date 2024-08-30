import ShimmerButton from "../magicui/shimmer-button";

export function ShimmerButtonComponent({ buttonText, onClick }) {
    return (
        <ShimmerButton className="shadow-2xl" onClick={onClick}>
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                {buttonText}
            </span>
        </ShimmerButton>
    );
}