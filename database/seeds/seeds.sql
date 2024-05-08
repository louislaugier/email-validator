INSERT INTO
    "public"."user" (
        "id",
        "email",
        "is_email_confirmed",
        "email_confirmation_code",
        "password_sha256",
        "last_ip_addresses",
        "last_user_agent",
        "two_fa_private_key_hash",
        "auth_provider",
        "created_at",
        "updated_at",
        "deleted_at"
    )
VALUES
    (
        '66608f5e-82fb-4e80-b069-40f852cac076',
        'l.laugier@pm.me',
        't',
        NULL,
        NULL,
        '172.19.0.1',
        'insomnia/8.6.1',
        NULL,
        'hubspot',
        '2024-04-25 00:34:02.828087',
        '2024-04-25 00:34:02.828087',
        NULL
    );

INSERT INTO
    "public"."order" (
        "id",
        "user_id",
        "duration",
        "type",
        "created_at",
        "cancelled_at"
    )
VALUES
    (
        1,
        '66608f5e-82fb-4e80-b069-40f852cac076',
        'yearly',
        'enterprise',
        '2024-05-03 14:10:20.996654',
        NULL
    );

INSERT INTO
    "public"."validation" (
        "id",
        "user_id",
        "guest_ip",
        "guest_user_agent",
        "single_target_email",
        "single_target_reachability",
        "bulk_address_count",
        "upload_filename",
        "report_token",
        "provider_source",
        "origin",
        "status",
        "created_at"
    )
VALUES
    (
        '1bc24916-241c-4199-a089-e91bf4a64cd8',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        NULL,
        NULL,
        23,
        NULL,
        'd7fb0363-b1df-440a-ba0d-7700c1981360',
        NULL,
        'api',
        'completed',
        '2024-05-05 19:32:53.847469'
    ),
    (
        '282ac652-02fd-4f40-a830-1aefa5a7d73b',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        NULL,
        NULL,
        23,
        NULL,
        '96c5118f-ac98-48d3-8374-a62d6f2f6e00',
        NULL,
        'app',
        'completed',
        '2024-05-05 20:42:27.340489'
    ),
    (
        '2d3f404b-38a1-481f-b9fc-a82710737066',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        NULL,
        NULL,
        23,
        NULL,
        'd25c5efb-d9b2-42cb-ab94-deb77fe96927',
        NULL,
        'api',
        'completed',
        '2024-05-05 19:35:22.450481'
    ),
    (
        '66e39ac9-5429-43de-8cb8-e4d12d61d63b',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        NULL,
        NULL,
        23,
        NULL,
        'd5a69612-68e6-4906-927c-a13b43463281',
        NULL,
        'api',
        'completed',
        '2024-05-05 20:42:47.94724'
    ),
    (
        '7b9094a7-2807-4226-8ff1-723cdddeea0e',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        NULL,
        NULL,
        23,
        NULL,
        '891de6cd-0a2a-4f25-80da-0352e00c1f32',
        NULL,
        'api',
        'completed',
        '2024-05-05 19:32:34.888756'
    ),
    (
        '88afedbb-004c-4e6d-9139-7c060f53a7e2',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        NULL,
        NULL,
        23,
        NULL,
        '17d27330-41e6-4977-ae57-0ed7e4304a56',
        NULL,
        'api',
        'completed',
        '2024-05-05 19:32:32.812864'
    ),
    (
        '899166d8-681e-4600-8759-0b32cff55472',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        NULL,
        NULL,
        23,
        NULL,
        '2a540264-0d16-461b-8c5b-8617d8a7f638',
        NULL,
        'api',
        'completed',
        '2024-05-05 19:35:21.576271'
    ),
    (
        '8a36829a-2480-464a-a0e0-8d033776a9cb',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        'l.laugier@proton.me',
        'safe',
        NULL,
        NULL,
        NULL,
        NULL,
        'api',
        'completed',
        '2024-05-05 20:42:37.229398'
    ),
    (
        'a540c9c3-caec-4237-b38d-ca23f1e6fd2c',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        NULL,
        NULL,
        23,
        NULL,
        '2aa82fc4-499d-48a4-936b-2705ad993205',
        NULL,
        'api',
        'completed',
        '2024-05-05 19:32:56.762376'
    ),
    (
        'a57134e0-4e10-4def-93f7-fce36c87a466',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        'l.laugier@proton.me',
        'safe',
        NULL,
        NULL,
        NULL,
        NULL,
        'app',
        'completed',
        '2024-05-05 20:42:36.086446'
    ),
    (
        'bdca9e6d-5118-4340-af96-1e612a26d31a',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        NULL,
        NULL,
        23,
        NULL,
        '497672d1-8b35-4657-bc0e-98b96b9841b0',
        NULL,
        'app',
        'completed',
        '2024-05-05 19:32:35.750799'
    ),
    (
        'c54a1ee8-927b-48c1-86d3-730bba097a79',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        NULL,
        NULL,
        23,
        NULL,
        'ac8d94e5-6ee0-40cc-a8e7-7936c145d59e',
        NULL,
        'api',
        'completed',
        '2024-05-05 20:42:28.449486'
    ),
    (
        'd46f853c-bb0c-47ed-8b60-c083794e2f55',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        NULL,
        NULL,
        23,
        NULL,
        'f2510851-144e-4811-9eae-548e7910c46d',
        NULL,
        'api',
        'completed',
        '2024-05-05 20:42:45.210329'
    ),
    (
        'e1466307-4a17-4030-833b-8f5cef8cec7a',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        'l.laugier@proton.me',
        'safe',
        NULL,
        NULL,
        NULL,
        NULL,
        'app',
        'completed',
        '2024-05-05 20:42:38.471553'
    ),
    (
        'ec0dc4ff-8139-44a6-809a-35b3eafbec9a',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        NULL,
        NULL,
        23,
        NULL,
        '3817f158-6cb8-4a8f-be1f-7b29f0b6645b',
        NULL,
        'app',
        'completed',
        '2024-05-05 19:32:55.65752'
    ),
    (
        'f1068c7c-1032-4cc4-aa38-c99b5cd4feb5',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        NULL,
        NULL,
        23,
        NULL,
        '00942ac8-808a-46f6-931b-318b11f8055f',
        NULL,
        'api',
        'completed',
        '2024-05-05 20:42:49.029756'
    ),
    (
        'f12963be-6223-4806-a174-b7d94f9283b2',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        'l.laugier@proton.me',
        'safe',
        NULL,
        NULL,
        NULL,
        NULL,
        'api',
        'completed',
        '2024-05-05 20:42:34.579236'
    ),
    (
        'f5f3d942-72ec-4e51-a8f5-8995d3c9898e',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        'l.laugier@pm.me',
        'risky',
        NULL,
        NULL,
        NULL,
        'salesforce',
        'app',
        'completed',
        '2024-05-05 20:42:32.928377'
    ),
    (
        'fd808528-cd01-4e33-8e75-ac897446cd4c',
        '66608f5e-82fb-4e80-b069-40f852cac076',
        NULL,
        NULL,
        NULL,
        NULL,
        23,
        NULL,
        '5ae9cfa4-3232-4f46-b81a-658bc77d0cbd',
        NULL,
        'app',
        'completed',
        '2024-05-05 19:35:20.498791'
    );