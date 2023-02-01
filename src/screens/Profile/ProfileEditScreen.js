import * as React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageProps,
  Modal
} from 'react-native';
import ImagePicker, { ImageOrVideo } from 'react-native-image-crop-picker';
import { Container, Content, Header } from '../../components';
import CommonBtn from '../../components/CommonBtn';
import TextInputContent from '../../components/TextInputContent';
import { BlurView } from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import { Images } from '../../theme';
import styles from './Styles/ProfileStyle';

function ProfileEditScreen({ navigation }, props) {
  const [uri, setUri] = React.useState(props.source?.uri || undefined);
  const [notSaveModal, setNotSaveModal] = useState(false);

  const pickPicture = () => {
    ImagePicker.openPicker({
      width: 110,
      height: 110,
      cropping: true
    }).then((image) => {
      setUri(image.path);
      props.onChange?.(image);
    });
  };
  return (
    <>
      <Container statusBarColorWhite conatinerStyle={styles.conatinerStyle}>
        <Header
          hasBackBtn
          title="Edit Profile"
          onBackPress={() => {
            // navigation.goBack();
            setNotSaveModal(true);
          }}
        />
        <Content contentContainerStyle={styles.profileEdirContainer}>
          <View style={styles.profileEditContent}>
            <View style={styles.profilePhotoView}>
              <View style={styles.profileEditPhoto}>
                <Image
                  source={uri ? { uri } : Images.UserProfile}
                  resizeMode="cover"
                  style={styles.profileEditPhoto}
                />
              </View>
              <TouchableOpacity
                style={styles.cameraIconBtn}
                onPress={pickPicture}>
                <Image
                  source={Images.CameroIcon}
                  resizeMode="contain"
                  style={styles.picPhotoIcon}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.editProfileUserName}>Michelle Rodriguez</Text>
            <View style={styles.editProfileInput}>
              <TextInputContent
                normalInput
                placeholder="Full name"
                leftInputIcon={Images.userLineIcon}
              />
              <TextInputContent
                normalInput
                placeholder="alex.pinto@gmail.com"
                leftInputIcon={Images.attherateIcon}
              />
              <TextInputContent
                normalInput
                placeholder="Mobile"
                leftInputIcon={Images.CallLineIcon}
                textInputRowStyle={styles.profileEditNumberInput}
              />
            </View>
            <CommonBtn
              normalBtn
              btnText="Save"
              commonBtnStyle={styles.editProfileSaveBtn}
              onPress={() => navigation.navigate('Profile')}
            />
          </View>
        </Content>
      </Container>
      <Modal transparent animationType="fade" visible={notSaveModal}>
        <View style={styles.modalCenteredView}>
          <BlurView
            style={styles.absolute}
            blurType="ultraThinMaterialDark"
            blurAmount={10}
          />
          <View style={styles.modalView}>
            <Image
              source={Images.ModalBgimg}
              resizeMode="contain"
              style={styles.modalBgImgStyle}
            />
            <LinearGradient
              colors={['#fdf5db1a', '#FDF5DB']}
              start={{ x: 1, y: 0.95 }}
              end={{ x: 1, y: 0 }}
              style={styles.bgGradiant}
            />
            <Text style={styles.modalHeading}>
              Are you sure{'\n'}
              you want save it?
            </Text>
            <Text style={styles.modalPeragraphText}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod.
            </Text>
            <TouchableOpacity
              style={styles.modalCloseBtn}
              onPress={() => setNotSaveModal(false)}>
              <Image
                source={Images.GreenCloseIcon}
                resizeMode="cover"
                style={styles.modalCloseBtnIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => {
                setNotSaveModal(false);
                setTimeout(() => {
                  navigation.navigate('profile');
                }, 500);
              }}>
              <Text style={styles.modalBtnText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalBtn, styles.modalLightBtn]}
              onPress={() => setNotSaveModal(false)}>
              <Text style={[styles.modalBtnText, styles.modalLightBtnText]}>
                Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default ProfileEditScreen;
