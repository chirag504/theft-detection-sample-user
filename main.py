# import streamlit as st
# import socketio as socket

# test_data = {"container": "azureml://subscriptions/e9e285c5-ec5f-4185-bf4b-a716adf017f9/resourcegroups/DreanIT/workspaces/AML/datastores/test_videos_for_tracking_datastore/paths/",
#  "path": "yt1z.net - People Walk In Shopping Mall Stock Video.mov"}
# SOCKETIO_SERVER_URL = "https://theft-detection-web-app-haenaehjepcfdmb3.canadacentral-01.azurewebsites.net/"
# sio = socket.SimpleClient()
# sio.connect(f'{SOCKETIO_SERVER_URL}')

# classes = None
# confidences = None
# bounding_boxes = None
# orig_name = None

# def connect_to_server(connection_string, video_path):
#     sio.emit("send_video", connection_string, video_path)

# @sio.on('receive_prediction')
# def on_prediction(data):
#     global classes, confidences, bounding_boxes, orig_name
#     classes = data['classes']
#     confidences = data['confidences']
#     bounding_boxes = data['bounding_boxes']
#     orig_name = data['orig_frame']

# st.title('Theft Detection Sample User')
# connection_string = st.text_input("Storage Connection String")
# video_path = st.text_input("Video Path on  ")

# connection_string = test_data['container']
# video_path = test_data['path']

# st.button("Submit", on_click=connect_to_server, args=[connection_string, video_path])

# st.text(classes)
# # st.text(confidences)
# # st.text(bounding_boxes)
# # st.text(orig_name)

# # receive_prediction
# # with socket.SimpleClient() as sio:
# #     sio.connect(f'{SOCKETIO_SERVER_URL}')
# #     event = sio.receive()
# #     event_name = event[0]
# #     event_args = event[1:]
# #     st.text(event_name)
# #     st.text(event_args)
# #     # TODO

