const {db} = require("../firebase/adminConfig");

// ✅ नया Device Add करने का API
const addDevice = async (req, res) => {
    try {
      const { android_id, device_name, model, status } = req.body;
  
      // Firestore के "devices" collection में device add करो
      await db.collection("devices").doc(android_id).set({
        android_id,
        device_name: device_name || "Unknown Device",
        model: model || "Unknown Model",
        status: status || "unlock", // 🔥 Default Value
        createdAt: new Date()
      });
  
      res.status(200).json({ success: true, message: "Device added successfully!" });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };

  const getDevice = async (req, res) => {
    try {
      const { android_id } = req.params;
      const deviceRef = db.collection("devices").doc(android_id);
      const doc = await deviceRef.get();
  
      if (!doc.exists) {
        return res.status(404).json({ success: false, message: "Device not found!" });
      }
  
      res.status(200).json({ success: true, data: doc.data() });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };


  const getAllDevices = async (req, res) => {
    try {
  
      const devicesSnapshot = await db.collection("devices").get();
      
  
      if (devicesSnapshot.empty) {
    
        return res.status(404).json({ success: false, message: "No devices found" });
      }
  
      const devices = [];
  
      devicesSnapshot.forEach(doc => {
      
        devices.push({
          id: doc.id,
          ...doc.data()
        });
      });
  
      res.status(200).json({ success: true, devices });
  
    } catch (error) {
      console.error("❌ Error fetching devices:", error.message);
      res.status(500).json({ success: false, error: error.message });
    }
  };
  

  
  module.exports = { addDevice, getDevice, getAllDevices};