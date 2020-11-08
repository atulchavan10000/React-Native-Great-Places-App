import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Button
} from 'react-native';
import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux';
import * as placesActions from '../store/actions/places-actions';
import ImagePicker from '../components/ImagePicker';
import LocationPicker from '../components/LocationPicker';

const NewPlaceScreen = props => {
    const [titleValue, setTitleValue] = useState('');
    const [selectedImage, setSelectedImage] = useState();
    const [seletectedLocation, setSelectedLocation] = useState();
    const dispatch = useDispatch();

    const titleChangeHandler = text =>{
        //you could add validation
        setTitleValue(text);
    };

    const imageTakenHandler = imagePath =>{
        setSelectedImage(imagePath);
    }

    const savePlaceHanlder = () =>{
        dispatch(placesActions.addPlace(titleValue, selectedImage, seletectedLocation));
        props.navigation.goBack();
    };

    // to avoid the infinite loop we used useCallback
    // to avoid getting this rendered with every render cycle
    const locationPickedHandler = useCallback(location => {
        setSelectedLocation(location)
    }, []) ;
    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput 
                    style={styles.textInput} 
                    onChangeText={titleChangeHandler} 
                    value={titleValue}
                />
                <ImagePicker onImageTaken={imageTakenHandler}/>
                <LocationPicker navigation={props.navigation} onLocationPicked={locationPickedHandler}/>
                <Button 
                    title="Save Place" 
                    color={Colors.primary}
                    onPress={savePlaceHanlder}
                />
            </View>
        </ScrollView>
    )
}

NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add Place'
};

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput:{
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});
export default NewPlaceScreen;