import React from 'react';
import {
    View, 
    Text,
    Button,
    StyleSheet,
    Image
} from 'react-native'
import Colors from '../constants/Colors';
import * as ImagePicker from 'expo-image-picker';


const ImgPicker = props =>{
    const takeImageHandler =() =>{
        ImagePicker.launchCameraAsync();
    };
    return (
        <View style={styles.stylePicker}>
            <View style={styles.imagePreview}>
                <Text>No Imge Picked Yet.</Text>
                <Image style={styles.image} />
            </View>
            <Button 
                title="Take Image" 
                color={Colors.primary} 
                onPress={takeImageHandler} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ImagePicker:{
        alignItems: 'center'
    },
    imagePreview:{
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1
    },
    image:{
        width: '100%',
        height: '100%'
    }
});

export default ImgPicker;