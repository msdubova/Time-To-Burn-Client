
type TextInputProps ={
    value:string;
    onChangeText: (value:string) => void;
}

export const TextInput : React.FC<TextInputProps> =({value, onChangeText}) => {
    return(
        <>
            <input type={"text"} size={60} value={value} onChange={(e) =>onChangeText(e.target.value) } />
        </>
    )

}

