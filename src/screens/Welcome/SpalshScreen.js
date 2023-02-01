import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import { Images } from '../../theme';
import { useDispatch } from 'react-redux';
import { getToken } from '../../utils/StorageService'
import { setTokenAction } from '../../redux/actions/UserAction';


function SplshScreen({ navigation }) {

    const [loading, setLoading] = useState(0.1)
    const dispatch = useDispatch();

    useEffect(() => {
        const _interval = setInterval(() => setLoading(loading + 1), 250);
        return () => clearInterval(_interval);
    }, []);

    useEffect(() => {
        load()
    }, []);

    const load = async () => {
        const data = await getToken()
        setTimeout(() => {
            if (data) {
                dispatch(setTokenAction(data))
                navigation.navigate('Home')
            } else {
                navigation.navigate('Login')
            }
        }, 700);
    }

    return (
        <View style={{ flex: 1, alignContent: "center", alignItems: "center", justifyContent: "center", backgroundColor: "#fff" }}>
            <View style={{ alignContent: "center", alignItems: "center", justifyContent: "center", }}>
                <View style={{ maxHeight: 200, maxWidth: 200, marginBottom: 20, }}>
                    <Image
                        source={Images.Logo}
                        resizeMode="contain"
                        style={{ height: 200, width: 200 }}
                    />
                </View>
                <Progress.Bar progress={loading} width={200} color={"#006653"} min={0} max={100} />
            </View>
        </View>
    )

}
export default React.memo(SplshScreen, () => true)