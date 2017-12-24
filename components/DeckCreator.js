import React, { Component } from "react"
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native"
import { Field, reduxForm, reset } from 'redux-form'
import { offWhite, darkTeal, gray, correctGreen, incorrectRed } from "../utils/colors"
import { createDeck } from '../actions'
import { connect } from 'react-redux'

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput style={styles.input} 
                    onChangeText={onChange} {...restInput} 
                    placeholder='Insert deck title'
         />
}

const submit = ({ values, dispatch }) => {
  dispatch(createDeck(values))
  dispatch(reset('deckTitleForm'))
}

class DeckCreator extends Component {
  render() {
    const { navigate } = this.props.navigation
    const { handleSubmit } = this.props

    return (
      <View style={styles.container}>
        <View style={[styles.flex2, styles.center]}>
          <View style={styles.deckQuestionAlign}>
            <Text style={styles.deckQuestion}>
              What is the title of your new deck?
            </Text>
          </View>
          <Field name='deckTitle' component={renderInput} />
        </View>
        <View style={styles.flex1}>
          <TouchableOpacity style={styles.buttonSubmit} onPress={handleSubmit(submit)}>
            <Text style={styles.buttonTextSubmit}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: offWhite,
    alignItems: "center",
    justifyContent: "center"
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex2: {
    flex: 2,
  },
  flex1: {
    flex: 1,
  },
  cardNumber: {
    color: gray,
  },
  deckQuestionAlign: {
    margin: 15,
  },
  deckQuestion: {
    fontFamily: 'Avenir-Black',
    fontSize: 28,
    textAlign: 'center',
    color: darkTeal,
  },
  input: {
    fontFamily: 'Avenir-Medium',
    fontSize: 20,
    textAlign: 'center',
    color: gray,
    borderColor: darkTeal,
    borderWidth: 2,
    borderRadius: 10,
    height: 45,
    width: 300,
    marginTop: 20,
  },
  buttonSubmit: {
    backgroundColor: darkTeal,
    borderColor: darkTeal,
    borderWidth: 2,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginVertical: 10,
  },
  buttonTextSubmit: {
    fontFamily: "Avenir-Heavy",
    fontSize: 20,
    color: offWhite,
  },
});

DeckCreator = reduxForm({
  form: 'deckTitleForm',
})(DeckCreator)

export default connect()(DeckCreator)
