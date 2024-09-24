import Globe from "../magicui/globe";

export function GlobeComponent() {
    return (
        <div className="relative flex h-[360px] xl:h-[560px] w-full items-center justify-center overflow-hidden">
            <Globe className="" />
            <div className="pointer-events-none absolute inset-0 h-full" />
        </div>
    );
}
