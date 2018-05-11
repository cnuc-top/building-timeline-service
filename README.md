# building-timesline-service

```shell
docker stop building-timeline-service \
; docker rm building-timeline-service \
; cd /app/building-timeline-service \
&& git pull \
&& docker build -t building-timeline-service . \
&& docker run -e TZ="Asia/Shanghai" -d -p 29001:7001 --name building-timeline-service \
--mount type=bind,source=/app/config/building-timeline-service,target=/app/config \
building-timeline-service
```
