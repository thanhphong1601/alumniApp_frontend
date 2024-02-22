import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from '@expo/vector-icons/AntDesign';
import dropdownStyle from "./dropdownStyle";


//for the drop down list
const role = [
    {label: 'Alumni', value: '1'},
    {label: 'Lecturer', value: '2'},
    {label: 'Admin', value: '3'},
]

const DropdownComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const click = () => {
      console.info(value)
    }

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[dropdownStyle.label, isFocus && { color: 'white' }]}>
            Your Role
          </Text>
        );
      }
      return null;
    };

    return (
      <View style={dropdownStyle.container}>
        {renderLabel()}
        <Dropdown
          style={[dropdownStyle.dropdown, isFocus && { borderColor: 'whitesmoke' }]}
          placeholderStyle={dropdownStyle.placeholderStyle}
          selectedTextStyle={dropdownStyle.selectedTextStyle}
          inputSearchStyle={dropdownStyle.inputSearchStyle}
          iconStyle={dropdownStyle.iconStyle}
          data={role}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          
        />
        <Button title="check" onPress={click}/>
      </View>
    );
}

export default DropdownComponent;

