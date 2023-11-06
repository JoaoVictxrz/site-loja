
type listProps = {
    name: string,
    url: string
}

export default function ListItem(props: listProps) {
    return (
        <li className="hover:text-black font-semibold text-lg ">
            <a href={props.url}>
                {props.name}
            </a>
        </li>
    )
}