package com.aspireattendance;
import android.os.Bundle; // here
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;//<== here
import com.rnfs.RNFSPackage;
import java.util.List;

//tensorFlow settings 
import java.util.Arrays;

public class MainActivity extends ReactActivity {

  /*
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  
  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        
        super.onCreate(savedInstanceState);
    }

  /*    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(), // <---- add comma
        new RNFSPackage() // <---------- add package
      );
    } */

  @Override
  protected String getMainComponentName() {
    return "aspireAttendance";
  }

  
}
