// //import liraries
// import React, { Component } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   Pressable,
//   ScrollView,
//   Image,
//   StatusBar,
//   ActivityIndicator,
//   // SafeAreaView,
// } from 'react-native';
// import { Font } from '../../Constants/FontFamily';

// // import Auth from '@Service/Auth';
// import Auth from '../../Service/Auth';




// // create a component
// const NewLogin = props => {

//   const [email, setemail] = React.useState('');
//   const [pass, setPass] = React.useState('');
//   const [loader, setLoader] = React.useState(false)
//   const [token, setToken] = React.useState('')
//   const [hidePass, setHidePass] = React.useState(true)



//   const userLogin = async () => {
//     setLoader(true)
//     let data = {
//       email: email,
//       password: pass,
//       deviceToken: token
//     }

//     let result = await Auth.login(data);
//     console.log("Auth>>>>>>>>>>>>>>>>>", result);
//     if (result && result.status) {
//       setLoader(false)
//       // dispatch(saveUserData(result.data))
//       // await Auth.setAccount(result.data);
//       // await Auth.setToken(result.data.token);
//       // Toast.showWithGravity('Login Successfully!', Toast.SHORT, Toast.BOTTOM);
//       Navigation.navigate('Home');
//     } else {
//       Toast.showWithGravity(typeof (result.error) == 'string' ? result.error : result.error[0].msg, Toast.SHORT, Toast.BOTTOM);
//       setLoader(false)
//     }
//   }
//   return (
//     <View style={styles.container}>
//       {/* <MyStatusBar
//         backgroundColor={'gray'}
//         barStyle="light-content"
//         translucent={false}
//       /> */}
//       <ScrollView
//         keyboardShouldPersistTaps="always"
//         contentContainerStyle={{ flexGrow: 1 }}
//         showsVerticalScrollIndicator={false}>
//         <View style={{ height: '90%' }}>
//           <View style={styles.logoImgView}>
//             {/* <Image
//               source={require('../../Assets/NewAuth/logo.png')}
//               style={styles.logoImg}
//             /> */}
//           </View>

//           <Text
//             style={{
//               ...styles.boldtext,
//               marginTop: (10),
//               color: 'gray',
//             }}>
//             Welcome, {'\n'}
//             Please Sign in.
//           </Text>

//           <Text
//             style={{
//               ...styles.text,
//               marginTop: (20),
//               marginHorizontal: (15),
//             }}>
//             Sign in to your account
//           </Text>

//           <View style={styles.cardview}>
//             <TextInput
//               style={styles.input}
//               onChangeText={value => setemail(value)}
//               value={email}
//               placeholder="Email Id"
//               keyboardType='email-address'
//               autoCapitalize="none"
//               placeholderTextColor={'gray'}
//             />
//             <View style={styles.border} />
//             <View
//               style={{
//                 ...styles.input,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 // borderWidth: 2,
//               }}>
//               <TextInput
//                 style={{ width: '60%', color: 'gray' }}
//                 placeholder="Password"
//                 placeholderTextColor={'gray'}
//                 onChangeText={value => setPass(value)}
//                 value={pass}
//                 secureTextEntry={hidePass}
//               />
//              <Pressable onPress={() => setHidePass(!hidePass)}>
//               {/* <Icon name={hidePass ? 'eye-with-line' : 'eye'} type="Entypo" style={styles.iconStyle} /> */}
//             </Pressable>
//             </View>
//           </View>
//           <Text 
//         onPress={()=>Navigation.navigate('ForgetPassword')}
//         style={[styles.text,{
//           textAlign:'right',
//           fontFamily:Font.Bold,
//           color:'gray',
//           paddingHorizontal:(18),
//           marginBottom:(5)
//         }]}>Forgot Password ?</Text>
//           <Pressable
//             disabled={loader}
//             onPress={() => userLogin()}
//             style={{
//               height: (42),
//               width: '90%',
//               marginTop: (20),
//               borderRadius: 8,
//             }}>
//             {loader ? (
//               <ActivityIndicator size="small" color={'gray'} />
//             ) : (
//               <Text style={styles.signText}>SIGN IN</Text>
//             )}
//           </Pressable>
//           {/* <View style={styles.twobtn}>
//             <Card style={styles.socialView}>
//               <Image
//                 source={require('../../Assets/NewAuth/gmail.png')}
//                 style={styles.img}
//               />
//               <Text style={{ color: 'gray' }}>Google</Text>
//             </Card>
//             <Card style={styles.socialView}>
//               <Image
//                 source={require('../../Assets/NewAuth/fb.png')}
//                 style={{
//                   ...styles.img,
//                   height: verticalScale(27),
//                   width: (27),
//                   resizeMode: 'contain',
//                 }}
//               />
//               <Text style={{ color: 'gray' }}>Facebook</Text>
//             </Card>
//           </View> */}
//         </View>
//         <View style={styles.bottom}>
//           <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//             }}>
//             <Text style={styles.text}>Don’t have an account?</Text>
//             <Pressable onPress={() => Navigation.navigate('NewSignUp')}>
//               <Text
//                 style={{
//                   ...styles.text,
//                   color: 'gray',
//                   fontFamily: Font.Bold,
//                 }}>
//                 REGISTER
//               </Text>
//             </Pressable>
//           </View>
//           {/* <View style={styles.smallline} /> */}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:'gray',
//   },
//   boldtext: {
//     fontSize:18,
//     color: 'gray',
//     fontFamily: Font.Bold,
//     marginHorizontal: 15,
//     // fontWeight: '700',
//   },
//   text: {
//     color: 'gray',
//     fontFamily: Font.Regular,
//     fontSize: 12,
//   },
//   input: {
//     flex:1,
//     height: 60,
//     marginHorizontal: 10,
//     color: 'gray',
//   },
//   cardview: {
//     width: '90%',
//     alignSelf: 'center',
//     marginVertical: 25,
//     borderRadius:8
//   },
//   border: {
//     borderBottomWidth: 1.5,
//     borderBottomColor: 'gray',
//     opacity: 0.6,
//   },
//   bottom: {
//     width: '100%',
//     paddingVertical: 20,
//     paddingHorizontal: 15,
//     borderTopWidth: 0.6,
//     borderTopColor: 'gray'
//   },
//   smallline: {
//     borderWidth: 2,
//     borderRadius: 10,
//     width: '30%',
//     alignSelf: 'center',
//     marginTop:25,
//     borderColor: 'gray',
//     opacity: 0.6,
//   },
//   twobtn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '78%',
//     alignSelf: 'center',
//     marginTop: 25,
//     marginBottom: 40,
//   },
//   img: {
//     resizeMode: 'center',
//   },

//   signText: {
//     fontSize:12,
//     fontFamily: Font.Bold,
//     color: 'gray',
//   },

//   logoImgView: {
//     paddingHorizontal: (16),
//     // alignSelf: 'center',
//   },

//   logoImg: {
//     height: 80,
//     width: 100,
//     resizeMode: 'contain',
    
//   },

//   socialView: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: 66,
//     justifyContent: 'center',
//     paddingVertical: 8,
//     borderRadius: 30,
//     backgroundColor: '#F8F8F8',
//   },

//   policyView: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     marginBottom:10
//   },

//   lightText: {
//     fontSize: (12),
//     fontFamily: Font.Medium,
//     color: 'gray',
//   },
//   iconStyle: {
//     alignSelf: 'flex-end',
//     fontSize: (13),
//     color: 'gray',
//     // paddingTop: (11),
//     marginRight: 10
//   },
// });

// export default NewLogin;



//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';





// create a component
const NewLogin = () => {


  // const userLogin = async () => {
  //   let pattern =
  //     /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,20}[\.][a-z]{2,5}/g;
  //   let emailresult = pattern.test(email);
  //   if (
  //     Fldvalid(password) === 0 ||
  //     password == '' ||
  //     Fldvalid(email) === 0 ||
  //     email == ''
  //   ) {
  //     SimpleToast.show('Please Fill Out All Field', SimpleToast.SHORT);
  //     return;
  //   } else if (emailresult != true) {
  //     SimpleToast.show('Invalid Email Id', SimpleToast.SHORT);
  //     return;
  //   } else if (password.length < 8) {
  //     SimpleToast.show('Password should be Min. 8 Character', SimpleToast.SHORT);
  //     return;
  //   }
  //   setLoader(true)


  //   let data = {
  //     email: email,
  //     password: password,
  //   }
  //   //  console.log('DATA>>>>====',data)

  //   AuthService.login(data).
  //     then(result => {
  //       console.log('LOGIN>>>>>>>..========', result)

  //       if (result && result.status) {
  //         setLoader(false)
  //         // updateToken(result.data.id);
  //         AuthService.setAccount(result.data);
  //         AuthService.setToken(result.data.token);
  //         dispatch(setuser({}))
  //         SimpleToast.showWithGravity('Logged In Successfully!', SimpleToast.SHORT, SimpleToast.BOTTOM);

  //       }
  //       else {
  //         SimpleToast.show(result.message);
  //         setLoader(false)
  //       }
  //     }).catch(err => {
  //       console.log('err>>>', err)
  //       SimpleToast.show(err.message)
  //     })



  // }
  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
 
  },
});

//make this component available to the app
export default NewLogin;
