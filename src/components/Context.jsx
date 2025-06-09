
import React, { createContext } from 'react'


export const Context = createContext();

const ContextProvider = ({children}) => {

const yes ="true"




  return (
    <Context.Provider value={{yes}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider



// whmcs

// identifier:1ZDawYiHgSrWtcNHxMMnrxNOXWrVuhf5
// 
// secret:oaqCUTnic0Z4TIKMOgN1eODGeWwnjDaS




// cpanel database
// pw: Mikeconnect@5050
// user: 
// db: User “elexdonh_db1” was added to the database “elexdonh_db1”.



// initail password reset email tempalte
// To reset your password, please click on the link below.

// Reset your password

// If you're having trouble, try copying and pasting the following URL into your browser:
// {$reset_password_url}

// If you did not request this reset, you can ignore this email. It will expire in 2 hours time.

// {$signature}





// domain_renew.php
// <?php
// // CORS & JSON headers
// header('Access-Control-Allow-Origin: *');
// header('Content-Type: application/json');
// header('Access-Control-Allow-Methods: POST, OPTIONS');
// header('Access-Control-Allow-Headers: Content-Type');
// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

// // Parse input
// $in = json_decode(file_get_contents('php://input'), true);
// if (empty($in['clientid']) || empty($in['serviceid'])) {
//     http_response_code(400);
//     echo json_encode(['success'=>false,'message'=>'Missing clientid or serviceid']);
//     exit;
// }
// $clientId  = (int)$in['clientid'];
// $serviceId = (int)$in['serviceid'];
// $payment   = $in['paymentmethod'] ?? 'banktransfer';

// // Build only hosting renewal payload
// $post = [
//   'action'             => 'AddOrder',
//   'username'           => '1ZDawYiHgSrWtcNHxMMnrxNOXWrVuhf5',
//   'password'           => 'oaqCUTnic0Z4TIKMOgN1eODGeWwnjDaS',
//   'clientid'           => $clientId,
//   'paymentmethod'      => $payment,
//   'servicerenewals[0]' => $serviceId,  // just this field
//   'responsetype'       => 'json',
// ];

// // API call
// $ch = curl_init('https://portal.elexdonhost.com.ng/includes/api.php');
// curl_setopt($ch, CURLOPT_POST, true);
// curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// $out = curl_exec($ch);
// $err = curl_error($ch);
// curl_close($ch);

// // Handle errors
// if ($err) {
//     http_response_code(500);
//     exit(json_encode(['success'=>false,'message'=>$err]));
// }
// $res = json_decode($out, true);
// if (!empty($res['result']) && $res['result'] === 'success') {
//     echo json_encode(['success'=>true,'orderid'=>$res['orderid'],'invoiceid'=>$res['invoiceid'] ?? null]);
// } else {
//     http_response_code(400);
//     echo json_encode(['success'=>false,'message'=>$res['message'] ?? 'API error','raw'=>$res]);
// }
