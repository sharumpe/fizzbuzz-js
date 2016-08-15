# Make a docker image with fizzbuzz baked in
FROM node:4-onbuild
RUN npm install
CMD ["npm","start"]
