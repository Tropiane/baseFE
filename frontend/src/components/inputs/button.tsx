function Button({link, text, className}: {link: string, text: string, className?: string}) {
    return <button className={`button-${className}`} onClick={() => window.location.href = link}>
        {text}
    </button>
}

export default Button