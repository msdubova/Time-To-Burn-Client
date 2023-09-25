
type TextInputProps ={
    value:string;
    onChangeText: (value:string) => void;
    onKeyPress:(e:any) => void;
}

export const TextInput : React.FC<TextInputProps> =({value, onChangeText, onKeyPress}) => {
    return(
        <>
            <input type={"text"} size={60} value={value} onChange={(e) =>onChangeText(e.target.value) } onKeyPress={onKeyPress} autoFocus />
        </>
    )

}

