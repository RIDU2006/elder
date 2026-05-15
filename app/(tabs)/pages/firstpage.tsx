// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   ImageBackground,
// } from "react-native";
// import { useRouter } from "expo-router";

// export default function FirstPage() {
//   const router = useRouter();

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSignIn = () => {
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     // Navigate to second page
//     router.push("/pages/secondpage");
//   };

//   return (
//     <ImageBackground
//       source={require("../../assets/images/caregiver.png")}
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <KeyboardAvoidingView
//         style={{ flex: 1 }}
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//       >
//         <ScrollView contentContainerStyle={styles.container}>
//           <Text style={styles.header}>SmartCare System</Text>

//           <View style={styles.card}>
//             <Text style={styles.label}>First Name *</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter First Name"
//               value={firstName}
//               onChangeText={setFirstName}
//             />

//             <Text style={styles.label}>Last Name *</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Last Name"
//               value={lastName}
//               onChangeText={setLastName}
//             />

//             <Text style={styles.label}>Mobile Number *</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Mobile Number"
//               keyboardType="phone-pad"
//               value={mobile}
//               onChangeText={setMobile}
//             />

//             <Text style={styles.label}>Email *</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Email"
//               keyboardType="email-address"
//               value={email}
//               onChangeText={setEmail}
//             />

//             <Text style={styles.label}>Password *</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Password"
//               secureTextEntry
//               value={password}
//               onChangeText={setPassword}
//             />

//             <Text style={styles.label}>Confirm Password *</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Confirm Password"
//               secureTextEntry
//               value={confirmPassword}
//               onChangeText={setConfirmPassword}
//             />

//             <TouchableOpacity style={styles.button} onPress={handleSignIn}>
//               <Text style={styles.buttonText}>Sign In</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },

//   container: {
//     flexGrow: 1,
//     justifyContent: "center",
//     padding: 20,
//   },

//   header: {
//     fontSize: 28,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//     color: "#fff",
//   },

//   card: {
//     backgroundColor: "rgba(255,255,255,0.95)",
//     borderRadius: 20,
//     padding: 20,
//   },

//   label: {
//     fontWeight: "600",
//     marginTop: 10,
//     marginBottom: 5,
//   },

//   input: {
//     backgroundColor: "#f2f2f2",
//     padding: 12,
//     borderRadius: 10,
//   },

//   button: {
//     backgroundColor: "#2E86DE",
//     padding: 15,
//     borderRadius: 12,
//     marginTop: 20,
//   },

//   buttonText: {
//     color: "#fff",
//     textAlign: "center",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });






// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   ImageBackground,
// } from "react-native";
// import { useRouter } from "expo-router";

// export default function FirstPage() {
//   const router = useRouter();

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSignIn = () => {
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     router.push("/(tabs)/pages/secondpage");
//   };

//   return (
//     <ImageBackground
//       source={require("../../../assets/images/caregiver.png")}
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <KeyboardAvoidingView
//         style={{ flex: 1 }}
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//       >
//         <ScrollView contentContainerStyle={styles.container}>
//           <Text style={styles.header}>SmartCare System</Text>

//           <View style={styles.card}>
//             <Text style={styles.label}>First Name *</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter First Name"
//               value={firstName}
//               onChangeText={setFirstName}
//             />

//             <Text style={styles.label}>Last Name *</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Last Name"
//               value={lastName}
//               onChangeText={setLastName}
//             />

//             <Text style={styles.label}>Mobile Number *</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Mobile Number"
//               keyboardType="phone-pad"
//               value={mobile}
//               onChangeText={setMobile}
//             />

//             <Text style={styles.label}>Email *</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Email"
//               keyboardType="email-address"
//               value={email}
//               onChangeText={setEmail}
//             />

//             <Text style={styles.label}>Password *</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Password"
//               secureTextEntry
//               value={password}
//               onChangeText={setPassword}
//             />

//             <Text style={styles.label}>Confirm Password *</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Confirm Password"
//               secureTextEntry
//               value={confirmPassword}
//               onChangeText={setConfirmPassword}
//             />

//             <TouchableOpacity style={styles.button} onPress={handleSignIn}>
//               <Text style={styles.buttonText}>Sign In</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },

//   container: {
//     flexGrow: 1,
//     justifyContent: "center",
//     padding: 20,
//   },

//   header: {
//     fontSize: 28,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//     color: "#fff",
//   },

//   card: {
//     backgroundColor: "rgba(255,255,255,0.95)",
//     borderRadius: 20,
//     padding: 20,
//   },

//   label: {
//     fontWeight: "600",
//     marginTop: 10,
//     marginBottom: 5,
//   },

//   input: {
//     backgroundColor: "#f2f2f2",
//     padding: 12,
//     borderRadius: 10,
//   },

//   button: {
//     backgroundColor: "#2E86DE",
//     padding: 15,
//     borderRadius: 12,
//     marginTop: 20,
//   },

//   buttonText: {
//     color: "#fff",
//     textAlign: "center",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });





import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";

export default function FirstPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignIn = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
  router.replace("/(tabs)");
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/smartcare.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.container}>

          <Text style={styles.header}>SmartCare System</Text>

          <View style={styles.card}>
            <Text style={styles.title}>Create Account</Text>

            <Text style={styles.label}>First Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter First Name"
              value={firstName}
              onChangeText={setFirstName}
            />

            <Text style={styles.label}>Last Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Last Name"
              value={lastName}
              onChangeText={setLastName}
            />

            <Text style={styles.label}>Mobile Number *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Mobile Number"
              keyboardType="phone-pad"
              value={mobile}
              onChangeText={setMobile}
            />

            <Text style={styles.label}>Email *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>Password *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <Text style={styles.label}>Confirm Password *</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 20,
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  label: {
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 5,
  },

  input: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 10,
  },

  button: {
    backgroundColor: "#2E86DE",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});



