import Safari from "../magicui/safari";

export function SafariComponent({url}) {
    return (
        <div className="relative">
            <Safari url={url} className="size-full" />
        </div>
    );
}
