import TextReveal from "../magicui/text-reveal";


export function TextRevealComponent({ text }) {
    return (
        <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg bg-white dark:bg-black">
            <TextReveal text={text} />
        </div>
    );
}
