import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return(
            <ScrollView>
                <Card wrapperStyle={{margin: 20}} title = 'Contact information'>
                    <Text style={{marginBottom: 10}}>
                        1 Nucamp Way {"\n"}
                        Seattle, WA 98001 {"\n"}
                        U.S.A. {"\n"}
                        {"\n"}
                        Phone: 1-206-555-1234 {"\n"}
                        Email: campsites@nucamp.co {"\n"}
                    </Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;