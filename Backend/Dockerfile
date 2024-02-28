FROM python:3-alpine
 
# Create app directory
 
# Install app dependencies
COPY requirements.txt ./
 
RUN pip install -r requirements.txt
 
# Bundle app source
COPY . .
 
EXPOSE 8080
CMD [ "python3","/src/chatREST.py"]