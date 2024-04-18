<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'Krishna' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '{:3Etfq<1k3M@24~H*JigiH3zhY|GxDdZ/fKd[0V^w >Q1OzNv]a9O+2^X5E.@l;' );
define( 'SECURE_AUTH_KEY',  'mMgVjK0lM85)8Gf-o K)bz~9h&AlN9#vO!XWXlCrvK5rqXjQIk7Pf%jk>y1vb`:F' );
define( 'LOGGED_IN_KEY',    'KT_5[#sHRhL!~C0f~%SJ{hd94$>M~r8!>d-Qs?NMHRIu%Q>#`va@cPbXB16B6S{S' );
define( 'NONCE_KEY',        'P#l%CZRr2g(>(FdwJy+|mqf0fd|2a8&@UoH}m/mByW6i9VIAFRDCk]TSTa_F1:El' );
define( 'AUTH_SALT',        '+CK$A6)-4j2egko9LdXsvq?3C0xy#hhXdMmCkhkwsJNA^NjH?T`I-IfMC-[bST1~' );
define( 'SECURE_AUTH_SALT', 'bX4;6ap=nR+xTMWZB:A^ I{LI6!0^uAPXGVV(?@Zg]qv&]nR:COC|wi5N_%1~ vZ' );
define( 'LOGGED_IN_SALT',   'n+*UsE-2>gc7=U/p4@NH~}=[E%49rc=kPi#yG HrCUvI){mQeOU,xDhNM)SZP` y' );
define( 'NONCE_SALT',       ' (+|O?eRx]T_1,wCwse94swK($Hn5G. 7<)1,enL#k18 K_cvOqrmCF]*K*F7@|b' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
