import Safari from "../magicui/safari";

export function SafariComponent({ src, url, width,height }) {
    return (
        <div className="relative">
            <Safari src={src} url={url} width={width} height={height} className="size-full" />
        </div>
    );
}
