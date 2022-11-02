import { StyleSheet } from "react-native"
import { colors } from "../constants"

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold',
        margin: 10
    },
    row: {
        flexDirection: 'row'
    },
    justifyContentSpaceAround: {
        justifyContent: 'space-around'
    },
    justifyContentSpaceBetween: {
        justifyContent: 'space-between'
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    todo: {
        fontSize: 16,
        color: colors.white,
    },
    ph2: {
        paddingHorizontal: 10
    },
    mh4: {
        marginHorizontal: 20
    },
    mv4: {
        marginVertical: 20
    },
    mt2: {
        marginTop: 10
    },
    ml2: {
        marginLeft: 10
    },
    mr2: {
        marginRight: 10
    },
    bgDark: {
        backgroundColor: colors.dark
    },
    hr: {
        height: 1,
        backgroundColor: colors.white
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'cover'
    }
})

export default styles