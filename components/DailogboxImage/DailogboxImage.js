import { View, Text, StyleSheet, Button, PermissionsAndroid } from 'react-native'
import { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './DailogboxImageStyles';
import axios from 'axios';





const DailogboxImage = ({ isShow, onRequestClose, onGalleryImageSelect }) => {

    const [cameraPhoto, setCameraPhoto] = useState();
    const [galleryPhotos, setGalleryPhotos] = useState([]);
    const [selectedPDFs, setSelectedPDFs] = useState([]);
    const [uploadedImageUrls, setUploadedImageUrls] = useState([]);

    const apiUrl = 'http://localhost:4000/api/reimbursement/uploadfile';

    const uploadFileToApi = async (selectedImageUris) => {
        try {
            if (!Array.isArray(selectedImageUris)) {

                selectedImageUris = [selectedImageUris];
            }

            const formData = new FormData();

            selectedImageUris.forEach((selectedImageUri, index) => {
                const fileExtension = selectedImageUri.split('.').pop();
                formData.append('files', {
                    uri: selectedImageUri,
                    type: 'image/jpeg',
                    name: `image_${index}.${fileExtension}`,
                });
            });

            const response = await axios.post(apiUrl, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            console.log('Response status:', response.status);
            if (response.status === 200) {
                const { message, data } = response.data;
                console.log('Imagesupload succesfully:', message);
                console.log('Image URLs:', data);
                setUploadedImageUrls(data);
            } else {
                console.error('Failed to upload files. Status:', response.status);
            }
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };



    let data = {
        saveToPhoto: true,
        mediaType: 'photo'

    }


    const openCamera = async () => {
        try {

            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                const result = await launchCamera(data);

                if (result.assets.length > 0) {

                    setCameraPhoto(result.assets[0].uri);
                } else {

                    console.log('No photo captured');
                }
            } else {

                console.log('Camera permission denied');
            }
        } catch (error) {

            console.error('Error opening camera:', error);
        }
    };

    // const openGallery = async () => {
    //     try {
    //         const result = await ImagePicker.openPicker({
    //             multiple: true,
    //             mediaType: 'photo',
    //         });

    //         console.log('ImagePicker result:', result);

    //         if (result && result.length > 0) {
    //             const selectedImages = result.map((image) => image.path);
    //             setGalleryPhotos(selectedImages);

    //             console.log('Selected images:', selectedImages);

    //             selectedImages.forEach((selectedImageUri) => {
    //                 uploadFileToApi(selectedImageUri);
    //             });
    //         } else {
    //             console.log('No photos selected');
    //         }
    //     } catch (error) {
    //         console.error('Error selecting images from gallery:', error);
    //     }
    // };

    const openGallery = async () => {
        try {
            const result = await ImagePicker.openPicker({
                multiple: true,
                mediaType: 'photo',
            });

            console.log('ImagePicker result:', result);

            if (result && result.length > 0) {
                const selectedImages = result.map((image) => image.path);
                setGalleryPhotos(selectedImages);

                console.log('Selected images:', selectedImages);

                for (const selectedImageUri of selectedImages) {
                    await uploadFileToApi(selectedImageUri);
                }
            } else {
                console.log('No photos selected');
            }
        } catch (error) {
            console.error('Error selecting images from gallery:', error);
        }
    }
    const openPDF = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf],
            });

            if (result) {
                setSelectedPDFs([...selectedPDFs, result.uri]);
            } else {
                console.log('No PDF selected');
            }
        } catch (error) {
            console.error('Error selecting PDF:', error);
        }
    };


    return (

        <View style={styles.container}>
            <Modal transparent={true} visible={isShow}
                onTouchCancel={true}
                backdropOpacity={0.5}
                onBackdropPress={onRequestClose}
                onRequestClose={onRequestClose}
                animationType='slide'>
                <View style={styles.centeredView}>

                    <View style={styles.modelView}>
                        <View style={styles.optionContainer}>
                            <Text style={{ fontSize: 20, color: 'black', padding: 6 }}>Select an Option</Text>
                            <Text style={styles.modelText} onPress={openGallery}>Gallery</Text>
                            <Text style={styles.modelText} onPress={openPDF}>PDF</Text>
                            <Text style={styles.modelText} onPress={openCamera}>Camera</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}



export default DailogboxImage;