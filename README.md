# cs378-p4
Since this is being hosted on GitHub pages, I cannot host my own CORS Anywhere
server. Therefore, I will be using the demo server. To activate the demo
server, you will have to go to https://cors-anywhere.herokuapp.com/corsdemo. 
Please note that the demo server is rate limited to 50 requests per hour.

Due to the nature of the game api I am using, all data requests require an item
id. However, there is no api call to get the name of an item from an item id.
Therefore, to implement item searching, I have created a map of relevant item
names to their ids in my-react-app/src/constants/nameToIdMap.js.
