import Link from "next/link";
import React from "react";


interface IA {
    text: string;
    href: string;
}
const A = ({text, href}: IA) => {
    return (
        <Link href={href}>{text}</Link>
    );
};

export default A;