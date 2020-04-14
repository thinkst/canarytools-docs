#!../venv/bin/python

import json
import sys

sanitise_dict = {
    'device_id':'<node_id>',
    'device_id_hash':'<device_hash>',
    'id':'<node_id>',
    'ip_address':'192.168.1.2',
    'mac':'00:00:00:00:00:00',
    'mac_address':'00:00:00:00:00:00',
    'node_id':'<node_id>',
    'link':'<unique_link>',
    'ovalink':'<unique_link>',
    'password':'<password>',
    'seedlink':'<unique_link>',
    'user_ip':'<user_ip>',
    'user':'<user_email>', 
    'user_browser_agent':'<browser_agent_string>',
    'url':'<token_url>',
    'canarytoken':'<token_code>',
    'key':'<token_key>',
    'hostname':'<token_hostname>',
    'secret_access_key': '<aws_secret_access_key>',
    'username': '<user_name>',
    'factory_auth': '<factory_auth_token>',
    'access_key_id': '<access_key_id>',
    'secret_access_key': '<aws_secret_access_key>'
}

def cleanse(rvar):
    for k,v in rvar.items():
        if isinstance(v,dict):
            cleanse(v)
        elif isinstance(v,list):
            if v and isinstance(v[0], dict):
                for element in v:
                    cleanse(element)
        elif k == 'id' and isinstance(v,int):
            continue
        elif k in sanitise_dict:
            rvar[k] = sanitise_dict[k]
        # Replace emails in audit trail messages    
        elif k == 'message':
            if 'ayteecee@gmail.com' in v:
                rvar[k] = v.replace('ayteecee@gmail.com','<user_email>')
            elif 'nick@thinkst.com' in v:
                rvar[k] = v.replace('nick@thinkst.com','<user_email>')
    return rvar  

if __name__ == "__main__":
    for line in sys.stdin:
        sanitized = cleanse(json.loads(line))
        print(json.dumps(sanitized, indent=2, sort_keys=True))  