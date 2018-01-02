import { AsyncStorage, Alert } from 'react-native'
import { Notifications, Permissions } from 'expo'

export function uuid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }
    return s4() + s4() + s4() + s4() + s4()
}

export function cardCount(deck) {
	if (Object.keys(deck.deckQuestions).length === 1) {
		return (
			`${Object.keys(deck.deckQuestions).length}` + ' Card'
		)
	} 
	if (Object.keys(deck.deckQuestions).length > 1) {
		return (
			`${Object.keys(deck.deckQuestions).length}` + ' Cards'
		)
	} 
	else {
		return '0 Cards'
	}
}

export function cardNumber(currentCard) {
	if (currentCard === 0) {
		return 1
	} else {
		return currentCard + 1
	}
}

const NOTIFICATION_KEY = 'Urcards:notifications'

export function clearLocalNotifications() {
	return AsyncStorage.removeItem(NOTIFICATION_KEY)
		.then(Notifications.cancelAllScheduledNotificationsAsync())
}

function createNotification() {
	return {
		title: 'Quiz yourself!',
		body: "👋 Don't forget to quiz yourself today!",
		ios: {
			sound: true,
		},
		android: {
			sound: true,
			priority: 'high',
			sticky: false,
			vibrate: true,
		}
	}
}

export function setLocalNotification() {
	AsyncStorage.getItem(NOTIFICATION_KEY)
		.then(JSON.parse)
		.then((data) => {
			if (data === null) {
				Permissions.askAsync(Permissions.NOTIFICATIONS)
				.then(({ status }) => {
					if (status === 'granted') {
						Notifications.cancelAllScheduledNotificationsAsync()

						let tomorrow = new Date() 
						tomorrow.setDate(tomorrow.getDate() + 1)
						tomorrow.setHours(8)
						tomorrow.setMinutes(0)

						Notifications.scheduleLocalNotificationAsync(
							createNotification(),
							{
								time: tomorrow,
								repeat: 'day',
							}
						)

						AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
					}
				})
			}
		})
}

export function formValidate() {
	Alert.alert(
	  'Warning ⚠️',
	  'Text must not be empty. Please insert something and try again. 👌',
	  { cancelable: false }
	)
}
