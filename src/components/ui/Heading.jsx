
export const Heading = ({
    title,
    description
}) => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-[#2d9bff] tracking-tight pb-3">{title}</h2>
            <p className="text-sm text-muted-foreground">
                {description}
            </p>
        </div>
    )
}
