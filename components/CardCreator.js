import React, { Component } from "react"
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Field, reduxForm, reset } from 'redux-form'
import { connect } from 'react-redux'
import { offWhite, darkTeal, gray, correctGreen, incorrectRed } from "../utils/colors"
import { addCard } from '../actions'

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput style={styles.input} 
                    onChangeText={onChange} {...restInput} 
         />
}

const submit = (values, dispatch, props) => {
  const { navigate } = props.navigation
  const { deckTitle } = props.navigation.state.params
  dispatch(addCard(deckTitle, values))
  dispatch(reset('cardForm')) 
  navigate('DeckCover')
}

class CardCreator extends Component {
  render() { 
    const { handleSubmit } = this.props

    return (
      <View style={styles.container}>
        {console.log(this.props)}
        <View style={[styles.flex1, styles.center]}>
          <View style={styles.cardQuestionAlign}>
            <Text style={styles.cardQuestion}>
              Question
            </Text>
          </View>
          <Field name='cardQuestion' component={renderInput} />
        </View>
        <View style={[styles.flex1, styles.center]}>
          <View style={styles.cardAnswerAlign}>
            <Text style={styles.cardAnswer}>
              Answer
            </Text>
          </View>
          <Field name='cardAnswer' component={renderInput} />
        </View>
        <View style={[styles.flex2, styles.center]}>
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
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  cardNumber: {
    color: gray,
  },
  cardQuestionAlign: {
    margin: 15,
  },
  cardQuestion: {
    fontFamily: 'Avenir-Black',
    fontSize: 28,
    textAlign: 'center',
    color: darkTeal,
  },
  cardAnswerAlign: {
    margin: 15,
  },
  cardAnswer: {
    fontFamily: 'Avenir-Black',
    fontSize: 28,
    textAlign: 'center',
    color: darkTeal,
  },
  smallAnswer: {
    fontFamily: 'Avenir-Medium',
    fontSize: 20,
    color: gray,
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
    backgroundColor: offWhite,
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
    color: darkTeal,
  },
});


CardCreator = reduxForm({
  form: 'cardForm',
})(CardCreator)


export default connect()(CardCreator)
