import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Share,
} from 'react-native';
import { Header } from '../../components';
import RestaurantDetailSliderName from '../../components/RestaurantDetailSliderName';
import styles from './Styles/RestaurantDetailsStyle';



export default function StoreHeader({ payload }) {

    const [vegSwitch, setVegSwitch] = useState(true);
    const [nonVegSwitch, setNonVegSwitch] = useState(false);

    return (
        <>
            <View style={{ paddingBottom: 30, }}>
                <RestaurantDetailSliderName data={payload} />
            </View>

            <View style={styles.switchMenuBtnRow}>
                <View style={styles.switchRow}>
                    <Text style={styles.switchText}>Veg</Text>
                    <TouchableOpacity
                        style={styles.switchBtn}
                        onPress={() => setVegSwitch(!vegSwitch)}>
                        <View style={styles.vegSwitchBackLine} />
                        <View
                            style={
                                vegSwitch
                                    ? styles.vegSwitchHandalOn
                                    : styles.vegSwitchHandalOff
                            }
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.switchRow}>
                    <Text style={styles.switchText}>Non-Veg</Text>
                    <TouchableOpacity
                        style={styles.switchBtn}
                        onPress={() => setNonVegSwitch(!nonVegSwitch)}>
                        <View style={styles.nonVegSwitchBackLine} />
                        <View
                            style={
                                nonVegSwitch
                                    ? styles.nonVegSwitchHandalOn
                                    : styles.nonVegSwitchHandalOff
                            }
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </>
    );
}
