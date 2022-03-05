#!/bin/bash

echo "==> $(date +%H:%M:%S) ==> Running server... "
python manage.py runserver 0.0.0.0:8000