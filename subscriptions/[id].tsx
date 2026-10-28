import React from 'react';
import { Text, View } from 'react-native';
import {Link, router, useLocalSearchParams} from "expo-router";

const SubscriptionDetails = () => {

    const { id } = useLocalSearchParams<{id: string}>();

  return (
    <View>
      <Text>SubscriptionDetails: {id}</Text>
        <Text onPress={() => router.back()}>
            Go back
        </Text>
    </View>
  );
};

export default SubscriptionDetails;
