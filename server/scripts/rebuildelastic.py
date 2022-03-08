from django.core.management import call_command


# run elastic search command to rebuild index
def rebuild_elasticsearch_index():
    call_command('search_index', '--rebuild', '-f')